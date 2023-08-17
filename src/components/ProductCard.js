import React from "react";

const ProductCard = ({ info }) => {
  const { id, title, price, rating, image } = info;
  return (
    <div className="w-[200px] h-[200px] m-2 p-2 border border-blue-100 rounded-md flex flex-col justify-between items-center text-center">
      <img className="h-20 w-28" src={image} alt="product" />
      <h4>{title}</h4>
      <div className="flex justify-between border border-black w-full text-xs">
        <h4>Price: {price}$</h4>|<h4>Rating: {rating.rate}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
