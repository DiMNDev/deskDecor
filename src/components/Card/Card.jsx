import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = (product) => {
  return (
    <Link className="link" to={`/product/${product.product.id}`}>
      <div className="card">
        <div className="image">
          {product.product.isNew ? <span>New!</span> : ""}
          <img
            src={product.product.img}
            className="mainImage"
            alt={product.title}
          />
          <img
            src={product.product.img2}
            className="altImage"
            alt={product.title}
          />
        </div>
        <h2>{product.product.title}</h2>
        <div className="prices">
          <h3>${product.product.oldPrice}</h3>
          <h3>${product.product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
