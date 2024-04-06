import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useStore } from "../store.js";

export function Layout({ children }) {
  const [count, setCount] = useState(0);
  const cart = useStore((state) => state.cart);
  return (
    <>
      <header className="navbar">
        <nav>
          <div className="burgermenu">
            <FaBars />
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/success">Success</Link>
            </li>
          </ul>
        </nav>
        <div className="cartIcon">
          <FaCartArrowDown />
          <p className="cartquantity">{cart.length}</p>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footersection">Browse our collection of products</div>
        <div className="footersection">Location: Bergen, Norway</div>
        <div className="footersection">
          Contact us here: <Link to={"/contact"}>Contact</Link>
        </div>
      </footer>
    </>
  );
}
