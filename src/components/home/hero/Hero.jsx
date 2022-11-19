import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { products } from "../../assets/data/data";
import SearchItems from "./SearchItems";

const Hero = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (val) => {
    // console.log(val);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <label>
              Over <span>6,500</span>
              Curated Design
            </label>{" "}
            <br />
            <label>
              Resource, <span>Graphic & Website</span> Templates
            </label>
          </h1>
          <p>
            High-quality Design Themes for personal or commercial use contains
            6k+ items in 100 categories.
          </p>
          <div className="search">
            <span>All Categories</span>
            <hr />
            <input
              type="text"
              placeholder="Search Products ..."
              onChange={onChange}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="searchIcon heIcon" />
            </button>
          </div>
          <SearchItems product={products} value={value} onSearch={onSearch} />
          <p>Examples: Mockup, PSD, Theme Design, Image...</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
