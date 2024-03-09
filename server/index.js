// Require Express
const e = require("express");

// Require Exported Modules
const {
  client,
  createTables,
  createUser,
  createProduct,
  fetchUsers,
  fetchProducts,
} = require("./db");

const express = require("express");
const app = express();
app.use(express.json());

// GET Users
app.get("/api/users", async (req, res, next) => {
  try {
    res.send(await fetchUsers());
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load users" });
    next(err);
  }
});

// GET Products
app.get("/api/products", async (req, res, next) => {
  try {
    res.send(await fetchProducts());
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load products" });
    next(err);
  }
});

// Create init function
const init = async () => {
  const PORT = process.env.PORT || 3000;
  await client.connect();
  console.log("connected to database");

  await createTables();
  console.log("tables created");

  // Dummy users and products
  const dummy = await Promise.all([
    createUser({ username: "yasin", password: "yas_pw" }),
    createUser({ username: "edwin", password: "ed_pw" }),
    createUser({ username: "kavin", password: "kav_pw" }),
    createUser({ username: "liz", password: "liz_pw" }),
    createProduct({
      name: "laptop",
      description: "High-performance laptop with a sleek design.",
      price: 999.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/51kK0BLesNL._AC_UF894,1000_QL80_.jpg",
    }),
    createProduct({
      name: "smartwatch",
      description: "Fitness tracker with heart rate monitor and GPS.",
      price: 199.99,
      imageUrl: "https://m.media-amazon.com/images/I/71TIOhVWQ5L.jpg",
    }),
    createProduct({
      name: "tablet",
      description: "Portable tablet for entertainment and productivity.",
      price: 299.99,
      imageUrl:
        "https://m.media-amazon.com/images/I/51YFNAqxKDL._AC_SY780_.jpg",
    }),
    createProduct({
      name: "smartphone",
      description: "Latest smartphone model with advanced features.",
      price: 699.0,
      imageUrl: "https://m.media-amazon.com/images/I/51UtM-A3fdL.jpg",
    }),
  ]);

  console.log(await fetchUsers());
  console.log(await fetchProducts());

  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

// init function invocation
init();
