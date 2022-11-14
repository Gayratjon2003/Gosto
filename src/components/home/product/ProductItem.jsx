import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

const ProductItem = ({ data }) => {
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setOpenImage(src);
    if (src !== false) {
      setImg(src);
    }
  };
  return (
    <>
      <div className="product_items">
        {data.map((item) => (
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
                  <FiSearch onClick={() => onOpenImage(item.cover)} />
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
      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => onOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
