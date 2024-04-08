import { useState, useEffect } from "react";

import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RenderRating } from "./RenderRating";
import { useStore } from "../store.js";
import { Search } from "./Search.jsx";
export function ProductsFetch({ url }) {
  const [products, setProducts] = useState({ data: [] });
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  if (products.data.title) {
    //Specific Page
    return (
      <div className="container">
        <div className="specificproductbox" key={products.data.id}>
          <img
            className="specificimg"
            src={products.data.image.url}
            alt={products.data.title}
          />

          <div className="specificcardfooter">
            <div className="rating">{RenderRating(products.data.rating)}</div>
            <h3>{products.data.title}</h3>

            <div className="cardbottom">
              <p>
                Price: {products.data.discountedPrice}
                {products.data.price !== products.data.discountedPrice && (
                  <>
                    <br />
                    <span className="pricechanges">
                      <span className="discount">
                        {`${Math.round(
                          ((products.data.price -
                            products.data.discountedPrice) /
                            products.data.price) *
                            100
                        )}% OFF`}{" "}
                      </span>
                      <span className="oldprice">{products.data.price}</span>
                    </span>
                  </>
                )}
              </p>

              <button
                onClick={() => addToCart(products.data.id)}
                className="addtocart"
              >
                <FaCartPlus />
                +Cart
              </button>
            </div>
          </div>
          <div className="reviews">
            <h3>Reviews{` (${products.data.reviews.length})`}</h3>
            {products.data.reviews.map((review) => (
              <div key={review.id} className="review">
                <h4>By {review.username}</h4>
                <p>{review.description}</p>
                <div className="rating">{RenderRating(review.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    //All Products Page
    return (
      <>
        <Search productList={products} />
        <div className="container">
          {products.data.map((item) => (
            <Link key={item.id} to={`/${item.id}`}>
              <div className="productbox">
                <div className="cardheader">
                  <img
                    className="productimg"
                    src={item.image.url}
                    alt={item.title}
                  />
                  <div className="rating">{RenderRating(item.rating)}</div>
                  <h3>{item.title}</h3>
                </div>

                <div className="cardfooter">
                  <p>{item.description}</p>

                  <div className="cardbottom">
                    <p>
                      Price: {item.discountedPrice}
                      {item.price !== item.discountedPrice && (
                        <>
                          <br />
                          <span className="pricechanges">
                            <span className="discount">
                              {`${Math.round(
                                ((item.price - item.discountedPrice) /
                                  item.price) *
                                  100
                              )}% OFF`}{" "}
                            </span>
                            <span className="oldprice">{item.price}</span>
                          </span>
                        </>
                      )}
                    </p>

                    <button
                      onClick={() => addToCart(item.id)}
                      className="addtocart"
                    >
                      <FaCartPlus />
                      +Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}
