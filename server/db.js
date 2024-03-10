// imports packages
const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/e_commerce_db"
);
const uuid = require("uuid");

// Create Tables
const createTables = async () => {
  const SQL = `
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    CREATE TABLE users (
        id UUID PRIMARY KEY,
        username VARCHAR(25) UNIQUE NOT NULL,
        password VARCHAR(100) UNIQUE NOT NULL
    );
    CREATE TABLE products (
        id UUID PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL,
        description TEXT,
        price DECIMAL(10,2) NOT NULL,
        imageUrl VARCHAR(255)
    );
    CREATE TABLE cart (
        id UUID PRIMARY KEY,
        quantity INTEGER NOT NULL,
        user_id UUID REFERENCES users(id) NOT NULL,
        product_id UUID REFERENCES products(id) NOT NULL
    );
    `;
  await client.query(SQL);
};

// create a User
const createUser = async ({ username, password }) => {
  const SQL = `
    INSERT INTO users (id, username, password) VALUES ($1, $2, $3) RETURNING *
    `;
  const response = await client.query(SQL, [uuid.v4(), username, password]);
  return response.rows[0];
};

// create a Product
const createProduct = async ({ name, description, price, imageUrl }) => {
  const SQL = `
    INSERT INTO products (id, name, description, price, imageUrl) VALUES ($1, $2, $3, $4, $5) RETURNING *
    `;
  const response = await client.query(SQL, [
    uuid.v4(),
    name,
    description,
    price,
    imageUrl,
  ]);
  return response.rows[0];
};

// Fetch Users
const fetchUsers = async () => {
  const SQL = `
    SELECT * FROM users
    `;
  const response = await client.query(SQL);
  return response.rows;
};

// Fetch Products
const fetchProducts = async () => {
  const SQL = `
    SELECT * FROM products
    `;
  const response = await client.query(SQL);
  return response.rows;
};

// Fetch Single Product by ID
const fetchProductsByID = async (id) => {
  const SQL = `
    SELECT * FROM products
    WHERE id=$1
    `;
  const response = await client.query(SQL, [id]);
  return response.rows[0];
};

// Export modules
module.exports = {
  client,
  createTables,
  createUser,
  createProduct,
  fetchUsers,
  fetchProducts,
  fetchProductsByID,
};
