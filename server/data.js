// Import createUser and createProduct functions
const { createUser, createProduct, createCategory } = require("./db");

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

    // Dummy Category
    const categories = await Promise.all([
      createCategory({
        name: "Electronics",
      }),
      createCategory({
        name: "Men",
      }),
      createCategory({
        name: "Women",
      }),
      createCategory({
        name: "Kids",
      }),
    ]);

    // Dummy Products
    const products = await Promise.all([
      // Electronics
      createProduct({
        name: "laptop",
        description: "High-performance laptop with a sleek design.",
        price: 999.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/51kK0BLesNL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "smartwatch",
        description: "Fitness tracker with heart rate monitor and GPS.",
        price: 199.99,
        imageUrl: "https://m.media-amazon.com/images/I/71TIOhVWQ5L.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "tablet",
        description: "Portable tablet for entertainment and productivity.",
        price: 299.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/51YFNAqxKDL._AC_SY780_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Smart LED Light",
        description: "50ft Smart Led Strip Lights for Bedroom",
        price: 13.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81mLzAeSdoL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Power Bank",
        description: "Portable Charger 26800mAh 22.5W Fast Charging Battery",
        price: 32.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81D9rG8YbgL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Beats Studio Buds",
        description:
          "True Wireless Noise Cancelling Earbuds, Enhanced Apple & Android",
        price: 169.95,
        imageUrl:
          "https://m.media-amazon.com/images/I/51AN8ExPAVL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Portable Bluetooth Speaker",
        description: "Portable Wireless Bluetooth 5.0 Speaker",
        price: 44.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/81-AAu018UL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "GoPro HERO12 Black",
        description: "Waterproof Action Camera with 5.3K60 Ultra HD Video",
        price: 349.0,
        imageUrl:
          "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Security Camera",
        description: "Security Camera Outdoor Wired with Night Vision Color",
        price: 31.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/61c3t9sd5tL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Neck Massager",
        description: "Nekteck Shiatsu Deep Kneading Massage Pillow with Heat",
        price: 49.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/71TmeJpNJCL._AC_UF1000,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Car Charger",
        description: "Car Charger, 67W 3-Port Compact Fast Charger",
        price: 39.99,
        imageUrl:
          "https://m.media-amazon.com/images/I/61fcdbI0u7L._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
      }),
      createProduct({
        name: "Striped Crew Neck Tee",
        description:
          "Add a touch of sophistication to your casual ensemble with this striped crew neck tee",
        price: 14.99,
        imageUrl:
          "https://ae01.alicdn.com/kf/Scea2937b867c4a0d8a1863859aa4fdc5I.jpg_640x640Q90.jpg_.webp",
        category: "Men",
      }),
      createProduct({
        name: "Long Sleeve Shirt",
        description:
          "Transition seamlessly from day to night with this black long sleeve shirt, a versatile addition to your wardrobe",
        price: 9.99,
        imageUrl:
          "https://allmade.com/cdn/shop/products/unisexspaceblackLS2_900x.jpg?v=1590732459",
        category: "Men",
      }),
      createProduct({
        name: "product1",
        description: "des1",
        price: 13.99,
        imageUrl: "url1",
        category: "Men",
      }),
      createProduct({
        name: "pr",
        description: "Portablery",
        price: 32.99,
        imageUrl: "ut",
        category: "Men",
      }),
      createProduct({
        name: "Graphic Print Muscle Tank",
        description:
          "Stay cool and stylish during workouts with this muscle tank featuring a trendy",
        price: 9.99,
        imageUrl:
          "https://ae01.alicdn.com/kf/S3b9d76db6b164cb7bdd8cd7ff2f41f9ey.jpg_640x640Q90.jpg_.webp",
        category: "Men",
      }),
      createProduct({
        name: "Sweatshirt",
        description:
          "Cozy sweatshirt, great for layering during colder weather",
        price: 34.99,
        imageUrl:
          "https://sanvt.com/cdn/shop/products/SANVT_men_sweatshirt_grey_1.jpg?v=1665759687",
        category: "Men",
      }),
      createProduct({
        name: "Polo Shirt",
        description:
          "Classic polo shirt with a timeless design, suitable for various occasions",
        price: 29.99,
        imageUrl:
          "https://i.pinimg.com/474x/83/5c/3c/835c3cf34b3a3c622c7cb81be90c1970.jpg",
        category: "Men",
      }),
      createProduct({
        name: "Leather Jacket",
        description:
          "Timeless black leather jacket, ideal for adding a rugged edge to any outfit",
        price: 99.99,
        imageUrl:
          "https://teenavi.com/wp-content/uploads/2023/06/t-shirt-and-jeans-outfit-16.jpg",
        category: "Men",
      }),
      createProduct({
        name: "Slim Fit Black Jeans",
        description: "Stylish slim-fit black jeans, crafted from premium denim",
        price: 39.99,
        imageUrl:
          "https://teenavi.com/wp-content/uploads/2022/08/skinny-jeans-and-t-shirt-outfit-2.jpg",
        category: "Men",
      }),
      createProduct({
        name: "T-Shirt, Black",
        description: "Classic black cotton t-shirt, perfect for everyday wear",
        price: 15.99,
        imageUrl:
          "https://teenavi.com/wp-content/uploads/2022/08/black-t-shirt-outfit-3.jpg",
        category: "Men",
      }),
    ]);

    return { user, categories, products };
  } catch (err) {
    console.error("error initializing dummy data", err);
  }
};

// Export the dummyData function
module.exports = { dummyData };
