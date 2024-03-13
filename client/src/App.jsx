import "./App.css";

function App() {
  return (
    <>
      <div className="api-documentation">
        <h1>E-Commerce Backend API Documentation</h1>
        <section className="section">
          <h2>Introduction</h2>
          <p>
            Welcome to the E-Commerce Backend API documentation. This API allows
            you to interact with the backend server to perform various actions
            related to users, products, and carts in an e-commerce application.
          </p>
        </section>
        <hr />
        <section className="section">
          <h2>Base URL</h2>
          <p>
            The base URL for all API endpoints is:
            <code> https://your-domain.com/api</code>
          </p>
        </section>
        <hr />
        {/* Authentication section */}
        <section className="section">
          <h2>Authentication</h2>
          {/* Register */}
          <div className="endpoint">
            <h3>Register a new user</h3>
            <p>
              <strong>URL:</strong> <code>/auth/register</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="orange">POST</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>
                Register a new user by providing the required user details.
              </code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <ul>
                <li>first_name: First name of the user (string, required)</li>
                <li>last_name: Last name of the user (string, required)</li>
                <li>email: Email address of the user (string, required)</li>
                <li>
                  password: Password for the user account (string, required)
                </li>
              </ul>
              <strong>Response: </strong>
              <code>Returns the newly registered user object.</code>
            </p>
          </div>
          {/* Login */}
          <div className="endpoint">
            <h3>Login user</h3>
            <p>
              <strong>URL:</strong> <code>/auth/login</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="orange">POST</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>
                Log in an existing user by providing the email and password.
              </code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <ul>
                <li>email: Email address of the user (string, required)</li>
                <li>
                  password: Password for the user account (string, required)
                </li>
              </ul>
              <strong>Response: </strong>
              <code>
                Returns a JWT token to authenticate the user for subsequent
                requests.
              </code>
            </p>
          </div>
          {/* User info */}
          <div className="endpoint">
            <h3>Get user info</h3>
            <p>
              <strong>URL:</strong> <code>/auth/me</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="green">GET</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>
                Retrieve information about the currently logged-in user.
              </code>
            </p>
            <p>
              <strong>Authentication: </strong>
              <code>Requires a valid JWT token in the request headers.</code>
            </p>
            <p>
              <strong>Response: </strong>
              <code>
                Returns user details including first name, last name, email, and
                cart items.
              </code>
            </p>
          </div>
        </section>
        <hr />
        {/* Products section */}
        <section className="section">
          <h2>Products</h2>
          {/* All products */}
          <div className="endpoint">
            <h3>Get all products</h3>
            <p>
              <strong>URL:</strong> <code>/products</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="green">GET</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>
                Retrieve a list of all products available in the store.
              </code>
            </p>
            <p>
              <strong>Response: </strong>
              <code>Returns an array of product objects.</code>
            </p>
          </div>
          {/* Single product */}
          <div className="endpoint">
            <h3>Get a single product</h3>
            <p>
              <strong>URL:</strong> <code>/products/:id</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="green">GET</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>Retrieve details of a specific product by its ID.</code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <code>id: ID of the product (string, required)</code>
            </p>
            <p>
              <strong>Response: </strong>
              <code>Returns the product object matching the provided ID.</code>
            </p>
          </div>
        </section>
        <hr />
        {/* Cart section */}
        <section className="section">
          <h2>Cart</h2>
          <p>These endpoints allow users to manage their shopping cart.</p>
          {/* Users Cart  */}
          <div className="endpoint">
            <h3>Get users cart</h3>
            <p>
              <strong>URL:</strong> <code>/users/:id/cart</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="green">GET</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>Retrieve the contents of the users shopping cart.</code>
            </p>
            <p>
              <strong>Authentication: </strong>
              <code> Requires a valid JWT token in the request headers.</code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <code>id: ID of the user (string, required).</code>
            </p>
            <p>
              <strong>Response: </strong>
              <code>Returns an array of cart items.</code>
            </p>
          </div>
          {/* Add to Cart */}
          <div className="endpoint">
            <h3>Add items to cart</h3>
            <p>
              <strong>URL:</strong> <code>/users/:id/cart</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="orange">POST</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>Add a product to the users shopping cart.</code>
            </p>
            <p>
              <strong>Authentication: </strong>
              <code>Requires a valid JWT token in the request headers.</code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <ul>
                <li>id: ID of the user (string, required)</li>
                <li>product_id: ID of the product to add (string, required)</li>
                <li>
                  quantity: Quantity of the product to add (integer, required)
                </li>
              </ul>
              <strong>Response: </strong>
              <code>Returns the updated cart item.</code>
            </p>
          </div>
          {/* Remove from Cart */}
          <div className="endpoint">
            <h3>Remove item from cart</h3>
            <p>
              <strong>URL:</strong> <code>/users/:user_id/cart/:id</code>
            </p>
            <p>
              <strong>Method:</strong> <code className="red">DELETE</code>
            </p>
            <p>
              <strong>Description: </strong>
              <code>Remove a product from the users shopping cart.</code>
            </p>
            <p>
              <strong>Authentication: </strong>
              <code>Requires a valid JWT token in the request headers.</code>
            </p>
            <p>
              <strong>Parameters: </strong>
              <ul>
                <li>user_id: ID of the user (string, required)</li>
                <li>id: ID of the cart item to remove (string, required)</li>
              </ul>
              <strong>Response: </strong>
              <code>Returns a success message upon successful removal.</code>
            </p>
          </div>
        </section>
        <p className="created-by">Created by Yasin</p>
      </div>
    </>
  );
}

export default App;
