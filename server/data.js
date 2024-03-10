// Require createUser and createProduct functions
const { createUser, createProduct } = require("./db");

// Function to initialize dummy data
const dummyData = async () => {
  try {
    // Dummy User
    const user = await Promise.all([
      createUser({ email: "yasmu213@gmail.com", password: "12345" }),
    ]);

    // Dummy Products
    const products = await Promise.all([
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

    return { user, products };
  } catch (err) {
    console.error("error initializing dummy data", err);
  }
};

// Export the dummyData function
module.exports = { dummyData };
