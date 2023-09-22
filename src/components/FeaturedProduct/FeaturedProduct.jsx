import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProduct = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "../../img/product-1-0.webp",
      img2: "../../img/product-1-1.webp",
      title: "Desktop Puzzle",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "../../img/product-2-0.jpg",
      img2: "../../img/product-2-1.jpg",
      title: "Airplane",
      isNew: true,
      oldPrice: 22,
      price: 15,
    },
    {
      id: 3,
      img: "../../img/product-3-0.jpg",
      img2: "../../img/product-3-1.jpg",
      title: "Zen Garden",
      isNew: false,
      oldPrice: 35,
      price: 20,
    },
    {
      id: 4,
      img: "../../img/product-4-0.jpg",
      img2: "../../img/product-4-1.jpg",
      title: "Bonsai Tree",
      isNew: false,
      oldPrice: 1000,
      price: 899,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          repellendus aut minima similique autem iusto, voluptate sint dicta
          dolores quae! Esse nostrum minima aperiam saepe tempore dolores, illum
          consectetur eveniet.
        </p>
      </div>
      <div className="bottom">
        {data.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
