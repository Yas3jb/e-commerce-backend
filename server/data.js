// Import User, Products and Categories functions
const { createUser, createProduct, createCategories } = require("./db");

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

    const categories = await Promise.all([
      createCategories({ name: "Laptop" }),
      createCategories({ name: "Smartphone" }),
      createCategories({ name: "Gaming" }),
      createCategories({ name: "Camera" }),
    ]);

    // Dummy Products
    const products = await Promise.all([
      // Electronics
      createProduct({
        name: "Apple - MacBook Pro 14",
        description:
          "The 14-inch MacBook Pro blasts forward with M3 Pro and M3 Max, radically advanced chips that drive even greater performance for more demanding workflows. With industry-leading battery life—up to 18 hours—and a beautiful Liquid Retina XDR display, it’s a pro laptop without equal. Now in a new color: Space Black.",
        price: 1799.0,
        rating: 4.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534615_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Apple - MacBook Air 15",
        description:
          "The 15-inch MacBook Air is impossibly thin and has a stunning Liquid Retina display. Supercharged by the M2 chip—and with up to 18 hours of battery life¹—it delivers incredible performance in an ultraportable design.",
        price: 1199.0,
        rating: 4.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534601_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "HP - 15.6 Touch-Screen Laptop - Intel Core i3",
        description:
          "Do more from anywhere. All-day long. Designed to keep you productive and entertained from anywhere, the HP 15.6-inch Laptop PC combines long lasting battery life with a thin and portable, microedge bezel design. ",
        price: 329.99,
        rating: 4.6,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6550/6550428_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Acer - Chromebook Spin 714 Intel Evo",
        description:
          "Powered by the Intel Evo platform, the 2-in-1 high-performance Acer Chromebook Spin 714 empowers users to stay productive anywhere with its 16:10 14” WUXGA touch display, 13th Gen Intel Core i5 processor, QHD webcam and military-grade durability. At just over 3 lbs., this sleek machine is not only fast and efficient, but it features a bevy of features such as a quick-chargeable 10-hour battery and a 360 convertible hinge so you have the flexibility to work in any mode. ",
        price: 519.99,
        rating: 4.6,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6541/6541841_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Lenovo - IdeaPad Duet 5 Chromebook - 13.3",
        description:
          "The thin and light 13 IdeaPad Duet 5 Chromebook now packs a brilliant OLED 1920 x 1080 touch screen featuring narrow bezels for true blacks and a cinematic experience, as well as four speakers for clear and resonant audio. Get Minecraft and 3 months of Realms Plus at no cost* with purchase of a new Chromebook. Terms Apply. *Offer valid for qualifying Chromebooks purchased on or after July 1st, 2023 through September 30th, 2023 while supplies last. ",
        price: 359.0,
        rating: 4.5,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477625_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Acer - Predator Helios Neo 16 WUXGA 165Hz IPS Gaming",
        description:
          "When you brandish this Predator Helios Neo gaming laptop, you’re holding the key to unlocking your ambitions – your curiosities – and endless possibilities. Suit up, strap in – and let Helios Neo pave the way. Equipped with superior cooling technology and a trove of performance like NVIDIA GeForce RTX 4050 laptop graphics and the latest 13th Gen Intel Core i5 processor with new performance hybrid architecture– this gaming laptop will be your guide to gaming bliss.",
        price: 799.99,
        rating: 4.2,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6541/6541305_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Lenovo - Legion Slim 5 16",
        description:
          "Equipped with AMD RyzenTM 7000 Series processors and NVIDIA GeForce RTXTM 40 Series graphics, the Lenovo Legion Slim 5 is built for students and young creatives who demand a machine that can handle both extreme pro-level gaming sessions and advanced rendering work. ",
        price: 1349.99,
        rating: 3.6,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534469_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "HP - 14 Laptop - Intel Celeron - 4GB Memory",
        description:
          "Do more from anywhere. All-day long. Designed to keep you productive and entertained from anywhere, the HP 14 inch Laptop PC combines long battery life with a thin and portable, micro-edge bezel design. ",
        price: 169.0,
        rating: 3.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569835_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Laptop",
      }),
      createProduct({
        name: "Apple - iPhone 15 Pro Max 256GB - Black",
        description:
          "iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. ",
        price: 1199.99,
        rating: 4.0,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525421_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "Apple - iPhone 15 256GB - Blue",
        description:
          "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C—all in a durable color-infused glass and aluminum design.",
        price: 929.99,
        rating: 4.2,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418013_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "Apple - iPhone 13 5G 128GB - Midnight",
        description:
          "iPhone 13. The most advanced dual-camera system ever on iPhone. Lightning-fast A15 Bionic chip. A big leap in battery life. Durable design. Superfast 5G.¹ And a brighter Super Retina XDR display.",
        price: 629.99,
        rating: 3.5,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417788_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "Apple - iPhone SE (3rd Generation) 64GB - Black",
        description:
          "Lightning-fast A15 Bionic chip and fast 5G.1 Big-time battery life and a superstar camera. Plus, the toughest glass in a smartphone and a Home button with secure Touch ID. ",
        price: 299.99,
        rating: 2.2,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507470_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "Samsung - Galaxy Z Fold5 256GB - Icy Blue",
        description:
          "Unfold an expansive screen and immerse yourself in your favorite entertainment on the go with Galaxy Z Fold5. The massive 7.6” interior screen opens up to elevate your streaming and gaming. Dual App Viewing allows you to master multitasking across multiple windows at once. And when folded, the front display is perfect for one handed use on the fly. Go big. Live large. With Galaxy Z Fold5.",
        price: 1399.99,
        rating: 4.1,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6548/6548843_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "Samsung - Galaxy S24 256GB - Onyx Black",
        description:
          "The new era of mobile AI is here. Make every day epic with Galaxy S24. See a delicious looking dish on your social feed but don’t see a recipe? Simply Circle to Search with Google to find it in seconds. Then head to a sunny farmer’s market to pick up the ingredients and see your list clearly on the bright, adaptive display of Galaxy S24. Once the meal is ready, capture stunning close ups of your dish and dinner guests, no matter the lighting, with a high res camera and Nightography. And all the while, you can stay plugged into the moment, not the outlet, with a long lasting battery. Do more easily with Galaxy S24. Galaxy AI is here. ",
        price: 759.99,
        rating: 4.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569842_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Smartphone",
      }),
      createProduct({
        name: "PlayStation 5 Slim Console Digital Edition",
        description:
          "Vertical stand not included. Experience Marvel’s Spider-Man 2 with PS5 innovations. Feel the force of web-swinging with adaptive triggers, while haptic feedback responds to Peter Parker’s new symbiote abilities and Miles Morales’ evolved bio-electric skills. ",
        price: 399.99,
        rating: 4.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6576/6576536cv11d.jpg;maxHeight=640;maxWidth=550",
        category_name: "Gaming",
      }),
      createProduct({
        name: "Microsoft - Xbox Series S 512GB All-Digital (Disc-Free Gaming) - White",
        description:
          "Jump into the world of Xbox with the Xbox Series S – Starter Bundle. Includes everything you need to play with a next-gen console and 3 months of Game Pass Ultimate. Be the first to play next-generation games that come to life on your Xbox Series S like Starfield and Forza Motorsport on day one. Plus, enjoy hundreds of other high-quality games like Minecraft Legends, Halo Infinite, and Forza Horizon 5 on Xbox Series S, PC, and cloud.",
        price: 299.99,
        rating: 2.5,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558673cv11d.jpg;maxHeight=640;maxWidth=550",
        category_name: "Gaming",
      }),
      createProduct({
        name: "Nintendo - Switch with Neon Blue and Neon Red Joy‑Con",
        description:
          "Play at home or on the go with one system. The Nintendo Switch system is designed to go wherever you do, instantly transforming from a home console you play on TV to a portable system you can play anywhere. So you get more time to play the games you love, however you like. Enjoy three modes in one system.",
        price: 299.99,
        rating: 2.0,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522225_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Gaming",
      }),
      createProduct({
        name: "ASUS - ROG Ally 7 120Hz FHD 1080p Gaming Handheld - AMD Ryzen Z1 Processor - 512GB - White",
        description:
          "Play your way with the ROG Ally gaming handheld. Access any game that runs on Windows across all game platforms, including Steam, GOG, Xbox Game Pass, cloud gaming services, Android apps and more. ",
        price: 399.99,
        rating: 4.6,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6543/6543664cv19d.jpg;maxHeight=640;maxWidth=550",
        category_name: "Gaming",
      }),
      createProduct({
        name: "Sony - Alpha 7 IV Full-frame Mirrorless Interchangeable Lens Camera with SEL2870 Lens - Black",
        description:
          "Sony Alpha 7 IV Full-frame Mirrorless Interchangeable Lens Camera - a true hybrid with 33MP Exmor R™ sensor, 8x faster BIONZ XR™ processor, up to 10 fps with continuous AF/AE tracking, 4K 60p and 15+ stops dynamic range ",
        price: 2699.99,
        rating: 4.3,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486185_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Camera",
      }),
      createProduct({
        name: "Canon - EOS Rebel T7 DSLR Video Two Lens Kit with EF-S 18-55mm and EF 75-300mm Lenses",
        description:
          "Take stunning pictures with vibrant colors using this EOS Rebel T7 camera. The built-in Wi-Fi makes printing and sharing pictures quick and easy, and the auto-focus system creates crisp images at a moment's notice. This EOS Rebel T7 camera takes Full HD video, allowing experiences to be captured with quality.",
        price: 599.99,
        rating: 3.9,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323759_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Camera",
      }),
      createProduct({
        name: "Canon - EOS R100 4K Video Mirrorless Camera with RF-S 18-45mm f/4.5-6.3 IS STM Lens - Black",
        description:
          "Experience the fun of RF mount content creation with the smallest and lightest EOS R series camera¹, the Canon EOS R100. Excellent still-image capabilities start with its 24.1 Megapixel APS-C size CMOS Image sensor and DIGIC 8 processor, along with Dual Pixel CMOS AF with the ability to detect human faces and focus on their eyes. The EOS R100 also can record Full HD video at up to 60 frames per second, and detailed, high-res 4K from the central area of the sensor at 24 frames per second. The versatility and small size of the RF-S18-45mm F4.5-6.3 IS STM lens gives you the flexibility you desire without taking up your whole camera bag. ",
        price: 499.99,
        rating: 3.3,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546137_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Camera",
      }),
      createProduct({
        name: "Sony - ZV-1F Vlog Camera for Content Creators and Vloggers - Black",
        description:
          "Sony ZV-1F Vlog camera for Content Creators and Vloggers, large 1-inch sensor with wide angle 20mm1 lens and packed with easy-to-use features, specifically designed for vloggers and online video creators.  ",
        price: 499.99,
        rating: 3.8,
        imageUrl:
          "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522416_sd.jpg;maxHeight=640;maxWidth=550",
        category_name: "Camera",
      }),
    ]);

    return { user, products, categories };
  } catch (err) {
    console.error("error initializing dummy data", err);
  }
};

// Export the dummyData function
module.exports = { dummyData };
