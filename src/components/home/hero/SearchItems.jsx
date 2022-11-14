import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const SearchItems = ({ value, product, onSearch }) => {
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {product
            .filter((items) => {
              const searchkey = value.toLowerCase();
              const title = items.title.toLowerCase();

              return (
                searchkey && title.startsWith(searchkey) && title !== searchkey
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt={item.title} />
                  <div className="overlay">
                    <button className="button">
                      <FiShoppingBag />
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className="details">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <h4>Price: ${item.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default SearchItems;
