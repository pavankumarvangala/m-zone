import React from "react";

const ProductCard = ({ info }) => {
  const { product_id, product_name, price, rating } = info;
  return (
    <div className="w-[200px] h-[200px] m-2 p-2 border border-blue-100 rounded-md flex flex-col justify-center items-center text-center">
      {/* <h4>{product_id}</h4> */}
      <h4>{product_name}</h4>
      <div className="flex justify-between border border-black w-full text-xs">
        <h4>Price: {price}$</h4>|<h4>Rating: {rating}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
