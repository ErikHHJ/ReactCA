import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useStore } from "../store.js";
import { ShowModal } from "../components/Modal.jsx";
import { Hamburger } from "../components/Burgermenu.jsx";

export function Layout({ children }) {
  const cart = useStore((state) => state.cart);
  const [localShow, setLocalShow] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCartClick = () => {
    setLocalShow((prevShow) => !prevShow);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <header className="navbar">
        <nav>
          <div className="hamburger">
            <FaBars onClick={toggleDropdown} />
          </div>

          <ul className="navbarul">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul
            className={`dropdown ${dropdownVisible ? "dropdownvisible" : ""}`}
          >
            <li className="dropdownitem">
              <Link to="/">Products</Link>
            </li>
            <li className="dropdownitem">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>
          <ShowModal
            className="modal-display-none"
            show={localShow}
            setShow={setLocalShow}
          />
          <FaCartArrowDown className="cartIcon" onClick={handleCartClick} />
          <p className="cartquantity">{cart.length}</p>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footersection">Browse our collection of products</div>
        <div className="footersection">Location: Bergen, Norway</div>
        <div className="footersection">
          Contact us here: <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
}
