import { useState } from "react";
import { Link } from "react-router-dom";
import { RenderRating } from "./RenderRating.jsx";

export function Search({ productList }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = search
    ? productList.data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <form action="#" className="search-box">
        <label htmlFor="search">Search here!</label>
        <input
          className="input"
          id="search"
          type="search"
          pattern=".*\S.*"
          required
          value={search}
          onChange={handleSearch}
          placeholder=" "
        />
        <span className="caret"></span>
      </form>

      <div className="searchresults">
        {filteredProducts.map((item) => (
          <Link to={`/${item.id}`}>
            <div key={item.id} className="searchresponse">
              <img
                className="searchimg"
                src={item.image.url}
                alt={item.title}
              />

              <div className="cardfooter">
                <div className="rating">
                  <p>{RenderRating(item.rating)}</p>
                </div>
                <h5>{item.title}</h5>
                <p>
                  {item.description} <br />
                  Price: {item.discountedPrice}
                  {item.price !== item.discountedPrice && (
                    <>
                      <span className="discount">{`${Math.round(
                        ((item.price - item.discountedPrice) / item.price) * 100
                      )}% OFF`}</span>{" "}
                      <span className="oldprice">{item.price}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
