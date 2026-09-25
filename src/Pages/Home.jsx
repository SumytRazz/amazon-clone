import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <div className="home_container">

        {/* Product Row 1 */}
        <div className="home_row">

          {/* Product 1 */}
          <div className="product">
            <h2>
              The Lean Startup: How Constant Innovation
              Creates Radically Successful Businesses
            </h2>

            <p className="product_price">
              <span>$</span>11.96
            </p>

            <div className="product_rating">
              ⭐⭐⭐⭐⭐
            </div>

            <img
              src="https://m.media-amazon.com/images/I/81-QB7nDh4L._SY466_.jpg"
              alt="The Lean Startup"
            />

            <button>
              Add to basket
            </button>
          </div>


          {/* Product 2 */}
          <div className="product">
            <h2>
              Kenwood kMix Stand Mixer for Baking,
              Stylish Kitchen Mixer with K-beater,
              Dough Hook and Whisk
            </h2>

            <p className="product_price">
              <span>$</span>239
            </p>

            <div className="product_rating">
              ⭐⭐⭐⭐⭐
            </div>

            <img
              src="https://m.media-amazon.com/images/I/71L9WZ3jJBL._AC_SL1500_.jpg"
              alt="Kenwood Mixer"
            />

            <button>
              Add to basket
            </button>
          </div>

        </div>


        {/* Product Row 2 */}
        <div className="home_row">

          {/* Product 3 */}
          <div className="product">
            <h2>
              Samsung LC49RG90SSUXEN 49" Curved
              LED Gaming Monitor
            </h2>

            <p className="product_price">
              <span>$</span>199.99
            </p>

            <div className="product_rating">
              ⭐⭐⭐⭐⭐
            </div>

            <img
              src="https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
              alt="Samsung Gaming Monitor"
            />

            <button>
              Add to basket
            </button>
          </div>


          {/* Product 4 */}
          <div className="product">
            <h2>
              Amazon Echo (3rd generation)
              Smart speaker with Alexa, Charcoal Fabric
            </h2>

            <p className="product_price">
              <span>$</span>98.99
            </p>

            <div className="product_rating">
              ⭐⭐⭐⭐⭐
            </div>

            <img
              src="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_SL1000_.jpg"
              alt="Amazon Echo"
            />

            <button>
              Add to basket
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;