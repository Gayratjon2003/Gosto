import React from "react";
import { price } from "../../assets/data/data";
import Heading from "../../common/Heading";

const Price = () => {
  return (
    <>
      <section className="price">
        <Heading
          title="Choose The Plans"
          decs="Meet our newbies! The latest tamplates upload to the marketplace."
        />
        <div className="content">
          {price?.map((item) => (
            <div className="box" key={item?.id}>
              <h3>{item?.name}</h3>
              <h1>
                <span>$</span>
                {item?.price}
                <label>/user per month</label>
              </h1>
              <p>{item?.desc}</p>
              <button className="button">GET STARTED</button>
              <ul>
                {item.list.map((list, id)=> (
                    <li key={id}>
                        <i>{list.icon}</i>
                        <span>{list.para}</span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Price;
