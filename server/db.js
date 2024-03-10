// imports packages
const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/e_commerce_db"
);
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT || "shhh";

// Create Tables
const createTables = async () => {
  const SQL = `
    DROP TABLE IF EXISTS cart;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    CREATE TABLE users (
        id UUID PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        email VARCHAR(25) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
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
const createUser = async ({ first_name, last_name, email, password }) => {
  // Create hashed password to be stored in the database to be used for Authentication
  const hashedPassword = await bcrypt.hash(password, 10); // without this line can't login after creating an account
  const SQL = `
    INSERT INTO users (id, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *
    `;
  const response = await client.query(SQL, [
    uuid.v4(),
    first_name,
    last_name,
    email,
    hashedPassword,
  ]);
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

// Authenticate a user based on email and password
const authenticate = async ({ email, password }) => {
  const SQL = `
  SELECT id, password, email FROM users WHERE email = $1
  `;
  const response = await client.query(SQL, [email]);
  if (
    !response.rows.length ||
    (await bcrypt.compare(password, response.rows[0].password)) === false
  ) {
    const error = Error("Not Authorized");
    error.status = 401;
    throw error;
  }
  const token = await jwt.sign({ id: response.rows[0].id }, JWT);
  console.log(token);
  return { token: token };
};

// Find user by token
const findUserByToken = async (token) => {
  let id;
  try {
    const payload = await jwt.verify(token, JWT);
    id = payload.id;
  } catch (err) {
    const error = Error("Not Authorized");
    error.status = 401;
    throw error;
  }
  const SQL = `
  SELECT id, email FROM users WHERE id = $1
  `;
  const response = await client.query(SQL, [id]);
  if (!response.rows.length) {
    const error = Error("not authorized");
    error.status = 401;
    throw error;
  }
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
  authenticate,
  findUserByToken,
};
