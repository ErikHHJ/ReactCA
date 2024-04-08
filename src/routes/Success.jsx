import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export function Success() {
  return (
    <div className="success">
      <div className="text">
        <FaCheckCircle className="successicon" />
        <h1>Success</h1>

        <p>Thank you for your purchase, order #00000000001</p>
        <p>
          Feel free to tell us about new items to add to our collection, your
          experience with our products and most importantly, how much better we
          are than our competitors.
        </p>
      </div>
      <h5>Still in a shopping mood?</h5>
      <Link to="/">
        <button className="browse">Keep browsing</button>
      </Link>
    </div>
  );
}
