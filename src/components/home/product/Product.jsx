import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "./ProductItem";
import { products } from "../../assets/data/data.js";

const Product = () => {
  const [data, setData] = useState(products);
  return (
    <>
      <section className="product">
        <div className="container">
          <Heading
            title="Trendings Products"
            decs="Check the hottest design of
            the week. These rising stars are woth your attention."
          />

          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default Product;
