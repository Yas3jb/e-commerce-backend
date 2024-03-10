// Require Express
const e = require("express");

// Require Exported Modules
const {
  client,
  createTables,
  fetchUsers,
  fetchProducts,
  fetchProductByID,
  createUser,
  authenticate,
  findUserByToken,
  createCart,
  deleteCart,
  fetchCart,
} = require("./db");
const { dummyData } = require("./data");

const express = require("express");
const app = express();
app.use(express.json());

// Middleware function to check if a user is logged in
const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await findUserByToken(req.headers.authorization);
    next();
  } catch (err) {
    next(err);
  }
};

// POST Register a new user
app.post("/api/auth/register", async (req, res, next) => {
  try {
    res.send(await createUser(req.body));
  } catch (err) {
    next(err);
  }
});

// POST Log in user
app.post("/api/auth/login", async (req, res, next) => {
  try {
    res.send(await authenticate(req.body));
  } catch (err) {
    next(err);
  }
});

// GET to retrieve user info
app.get("/api/auth/me", isLoggedIn, async (req, res, next) => {
  try {
    res.send(await findUserByToken(req.headers.authorization));
  } catch (err) {
    next(err);
  }
});

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
    const singleProduct = await fetchProductByID(req.params.id);
    res.send(singleProduct);
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load the product" });
    next(err);
  }
});

// GET items in cart
app.get("/api/users/:id/cart", isLoggedIn, async (req, res, next) => {
  try {
    if (req.params.id !== req.user.id) {
      const error = Error("not authorized");
      error.status = 401;
      throw error;
    }
    const cartItems = await fetchCart(req.params.id);
    res.send(cartItems);
  } catch (err) {
    next(err);
  }
});

// POST items in cart
app.post("/api/users/:id/cart", isLoggedIn, async (req, res, next) => {
  try {
    if (req.params.id !== req.user.id) {
      const error = Error("not authorized");
      error.status = 401;
      throw error;
    }
    res.status(201).send(
      await createCart({
        user_id: req.params.id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
      })
    );
  } catch (err) {
    next(err);
  }
});

// DELETE products in the cart
app.delete(
  "/api/users/:user_id/cart/:id",
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.params.user_id !== req.user.id) {
        const error = Error("not authorized");
        error.status = 401;
        throw error;
      }
      await deleteCart({ user_id: req.params.user_id, id: req.params.id });
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

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
