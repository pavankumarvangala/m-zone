import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/cartSlice";
const ProductDetailsCard = ({ info }) => {
  const { id, category, image, title, rating, price } = info;
  const dispatch = useDispatch();

  return (
    <div className="h-[350px] w-[300px]">
      <h4 className="font-bold text-2xl">{category}</h4>
      <div className="h-[300px] w-[300px] border border-black rounded-lg flex flex-col justify-center items-center text-center">
        <img alt="product" src={image} className="h-[150px] w-[150px]" />
        <div>Product Name: {title}</div>
        <div>Price: {price}</div>
        <div>Rating: {rating?.rate}</div>
      </div>
      <div className="flex justify-around">
        <button
          className="px-3 py-2 m-2 bg-green-200 rounded-lg"
          onClick={() => dispatch(addItemToCart(info))}
        >
          Add to cart
        </button>
        <button className="px-3 py-2 m-2 bg-green-200 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
