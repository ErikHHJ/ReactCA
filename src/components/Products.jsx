import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RenderRating } from "./RenderRating";
import { useStore } from "../store.js";
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

  <RenderRating />;

  if (products.data.title) {
    //Specific Page
    return (
      <div className="container">
        <div className="specificproductbox" key={products.data.id}>
          <Link to={`/products/${products.data.id}`}>
            <img
              className="specificimg"
              src={products.data.image.url}
              alt={products.data.title}
            />
          </Link>
          <div className="specificcardfooter">
            <div className="rating">
              <p>{RenderRating(products.data.rating)}</p>
            </div>
            <h3>{products.data.title}</h3>
            <p>{products.data.description}</p>
            <p>
              Price: {products.data.discountedPrice}
              {products.data.price !== products.data.discountedPrice && (
                <>
                  <span className="discount">{`${Math.round(
                    ((products.data.price - products.data.discountedPrice) /
                      products.data.price) *
                      100
                  )}% OFF`}</span>{" "}
                  <span className="oldprice">{products.data.price}</span>
                </>
              )}
            </p>

            <button
              onClick={() => addToCart(products.data.id)}
              className="addtocart"
            >
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    //All Products Page
    return (
      <div className="container">
        {products.data.map((item) => (
          <div className="productbox" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img
                className="productimg"
                src={item.image.url}
                alt={item.title}
              />
            </Link>

            <div className="cardfooter">
              <div className="rating">
                <p>{RenderRating(item.rating)}</p>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="cardbottom">
                <p>
                  Price: {item.discountedPrice}
                  {item.price !== item.discountedPrice && (
                    <>
                      <p className="discount">{`${Math.round(
                        ((item.price - item.discountedPrice) / item.price) * 100
                      )}% OFF`}</p>{" "}
                      <p className="oldprice">{item.price}</p>
                    </>
                  )}
                </p>

                <button
                  onClick={() => addToCart(item.id)}
                  className="addtocart"
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
