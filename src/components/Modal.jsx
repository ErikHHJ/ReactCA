import { Modal, Overlay } from "./styledComponents/ModalComponents.jsx";
import { useStore } from "../store.js";
import { useState, useEffect } from "react";
import { ProductsFetch } from "./ProductsFetch.jsx";
import { Link } from "react-router-dom";
export function ShowModal({ show }) {
  const [localShow, setLocalShow] = useState(show);
  const cart = useStore((state) => state.cart);

  useEffect(() => {
    setLocalShow(show);
  }, [show]);

  const closeCart = () => {
    setLocalShow(false);
    setShow(false);
  };

  return (
    <div className={localShow ? "modal-display-block" : "modal-display-none"}>
      <Overlay onClick={closeCart} />
      <Modal show={localShow} onClick={(e) => e.stopPropagation()}>
        {
          <div>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <ProductsFetch
                    url={`https://v2.api.noroff.dev/online-shop/${item}`}
                  />
                </div>
              );
            })}
            <Link to="/checkout">
              <h5 onClick={closeCart} className="tocheckout">
                Go to Checkout
              </h5>
            </Link>
          </div>
        }
      </Modal>
      <button className="close" onClick={closeCart}>
        Close
      </button>
    </div>
  );
}
