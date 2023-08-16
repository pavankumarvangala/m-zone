import React from "react";

const ProductDetailsCard = ({ category, info }) => {
  return (
    <div>
      <h4 className="font-bold text-2xl">{category}</h4>
      <div className="h-[300px] w-[300px] border border-black rounded-lg flex flex-col justify-center items-center text-center">
        <div>Product Name: {info.product_name}</div>
        <div>Price: {info.price}</div>
        <div>Rating: {info.rating}</div>
        <div>currency: {info.currency}</div>
        <div>availability: {info.availability ? "Yes" : "No"}</div>
        <div>Seller: {info.seller.seller_name}</div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
