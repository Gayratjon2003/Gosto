import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

const SearchItems = ({ value, product, onSearch }) => {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    dispatch(ADD(e))
  }
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {product
            .filter((items) => {
              const searchkey = value.toLowerCase();
              const title = items.title.toLowerCase();

              return (
                searchkey && title.includes(searchkey) && title !== searchkey
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt={item.title} />
                  <div className="overlay">
                    <button className="button">
                      <FiShoppingBag onClick={()=> addToCart(item)} />
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
