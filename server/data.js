// Import createUser and createProduct functions
const { createUser, createProduct } = require("./db");

// Function to initialize dummy data
const dummyData = async () => {
  try {
    // Dummy User
    const user = await Promise.all([
      createUser({
        first_name: "Example",
        last_name: "One",
        email: "example@gmail.com",
        password: "12345",
      }),
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
        name: "Smart LED Light",
        description: "50ft Smart Led Strip Lights for Bedroom",
        price: 13.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81mLzAeSdoL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Power Bank",
        description: "Portable Charger 26800mAh 22.5W Fast Charging Battery",
        price: 32.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81D9rG8YbgL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Beats Studio Buds",
        description:
          "True Wireless Noise Cancelling Earbuds, Enhanced Apple & Android",
        price: 169.95,
        imageUrl:
          "https://m.media-amazon.com/images/I/51AN8ExPAVL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Portable Bluetooth Speaker",
        description: "Portable Wireless Bluetooth 5.0 Speaker",
        price: 44.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81-AAu018UL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "GoPro HERO12 Black",
        description: "Waterproof Action Camera with 5.3K60 Ultra HD Video",
        price: 349.0,
        imageUrl:
          "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Security Camera",
        description: "Security Camera Outdoor Wired with Night Vision Color",
        price: 31.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/61c3t9sd5tL._AC_UF894,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Neck Massager",
        description: "Nekteck Shiatsu Deep Kneading Massage Pillow with Heat",
        price: 49.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/71TmeJpNJCL._AC_UF1000,1000_QL80_.jpg",
      }),
      createProduct({
        name: "Car Charger",
        description: "Car Charger, 67W 3-Port Compact Fast Charger",
        price: 39.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/61fcdbI0u7L._AC_UF894,1000_QL80_.jpg",
      }),
    ]);

    return { user, products };
  } catch (err) {
    console.error("error initializing dummy data", err);
  }
};

// Export the dummyData function
module.exports = { dummyData };
