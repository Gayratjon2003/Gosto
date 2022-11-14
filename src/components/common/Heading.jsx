import React from "react";

const Heading = ({ title, decs }) => {
  return (
    <>
      <div className="heading">
        <h2>{title}</h2>
        <p>{decs}</p>
      </div>
    </>
  );
};

export default Heading;
