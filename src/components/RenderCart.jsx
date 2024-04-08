import { useStore } from "../store.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function RenderCart() {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);
  const [products, setProducts] = useState([]);
  let receipt = 0;

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await Promise.all(
        cart.map(async (item) => {
          const url = `https://v2.api.noroff.dev/online-shop/${item}`;
          const response = await fetch(url);
          const data = await response.json();
          return data.data;
        })
      );
      setProducts(productData);
    };

    fetchProducts();
  }, [cart]);

  return (
    <>
      <div className="cartcontainer">
        <h1>Items in your cart:</h1>
        {products.map((product) => {
          receipt += product.discountedPrice || 0;

          return (
            <div className="cartitem" key={product.id}>
              <div className="cartitemsection">
                <img
                  className="cartimg"
                  src={product.image?.url || ""}
                  alt={product.title || ""}
                />
              </div>
              <div className="cartitemsection">
                <h3>{product.title || ""}</h3>
                <p>{product.description || ""}</p>
              </div>
              <div className="cartitemsection">
                <h3>Price: {product.discountedPrice || ""}</h3>
              </div>
            </div>
          );
        })}
        <div>
          <h3>Subtotal: {Math.round(receipt)}NOK</h3>
          <Link to="/success">
            <button onClick={clearCart} className="pay">
              Confirm and pay
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
