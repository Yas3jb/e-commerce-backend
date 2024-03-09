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
