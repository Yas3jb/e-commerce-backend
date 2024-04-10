// Import Express module
const express = require("express");
// Import cors module
const cors = require("cors");
// Create an Express application
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
// Import path
const path = require("path");

require("dotenv").config();

// Import functions from "./db" file
const {
  client,
  createTables, // Function to create database tables
  createUser, // Function to create a new user
  createCart, // Function to create a new shopping cart
  fetchUsers, // Function to fetch users
  fetchProducts, // Function to fetch products
  fetchProductByID, // Function to fetch a product by its ID
  fetchCart, // Function to fetch the shopping cart
  deleteCart, // Function to delete the shopping cart
  authenticate, // Function to authenticate a user
  findUserByToken, // Function to find a user by their authentication token
  fetchCategories, // Function to fetch a list of categories
  fetchCategoryByID, // Function to fetch a category by its ID
} = require("./db");
// Import dummyData object from the "./data" module
const { dummyData } = require("./data");

// static routes here (you only need these for deployment)
app.use(express.static(path.join(__dirname, "../client/dist")));

// app routes here
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);

// Stripe
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
// Route to handle checkout process
app.post("/api/checkout", async (req, res) => {
  try {
    // Fetch products from database
    const products = await fetchProducts();
    // Construct line items for Stripe checkout session
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          images: [product.imageurl],
        },
        // Converting price to cents
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));
    // Create a new checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      // Payment method types accepted
      payment_method_types: ["card"],
      // Products to be purchased
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });
    // Respond with the URL to redirect the user to the checkout page
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "An error occurred during checkout" });
  }
});

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

// POST Login user
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
    res.send(await fetchProductByID(req.params.id));
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load the product" });
    next(err);
  }
});

// GET Categories
app.get("/api/categories", async (req, res, next) => {
  try {
    res.send(await fetchCategories());
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load categories" });
    next(err);
  }
});

// GET Single category
app.get("/api/categories/:name", async (req, res, next) => {
  try {
    res.send(await fetchCategoryByID(req.params.name));
  } catch (err) {
    // error handling
    res.status(500).json({ error: "Failed to load the category" });
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
    res.send(await fetchCart(req.params.id));
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
  await dummyData();
  console.log("dummy data created");

  // Express server to listen
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

// init function invocation
init();
