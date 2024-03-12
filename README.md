# E-Commerce API

## Description

This project is an E-Commerce API built with Node.js and PostgreSQL, providing functionalities for user authentication, product management, cart management, and more.

## Authentication

- **Register**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`
- **Get user info**: `GET /api/auth/me`

## User Management

- **Get all users**: `GET /api/users`

## Product Management

- **Get all products**: `GET /api/products`
- **Get a product by ID**: `GET /api/products/:id`

## Cart Management

- **Get items in cart**: `GET /api/users/:id/cart`
- **Add item to cart**: `POST /api/users/:id/cart`
- **Delete item from cart**: `DELETE /api/users/:user_id/cart/:id`
