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
  fetchProductsByID,
} = require("./db");
const { dummyData } = require("./data");

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

// GET Single Product
app.get("/api/products/:id", async (req, res, next) => {
  try {
    const singleProduct = await fetchProductsByID(req.params.id);
    res.send(singleProduct);
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load the product" });
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

  // Initialize dummy data
  const { user, products } = await dummyData();

  console.log("Dummy user:", user);
  console.log("Dummy products:", products);

  console.log(await fetchUsers());
  console.log(await fetchProducts());

  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

// init function invocation
init();
