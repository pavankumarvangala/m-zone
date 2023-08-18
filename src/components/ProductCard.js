import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ info }) => {
  const { id, category, title, price, rating, image } = info;
  const dispatch = useDispatch();
  return (
    <div className="w-[260px] h-[260px] m-2 p-2 border border-blue-100 rounded-md flex flex-col justify-between items-center text-center">
      <Link to={`/productDetails/${category}/${id}`}>
        <div className="flex flex-col justify-between items-center text-center">
          <img className="h-20 w-28" src={image} alt="product" />
          <h4 className="text-ellipsis overflow-hidden">{title}</h4>
          <div className="flex justify-between border border-black w-full text-xs">
            <h4>Price: {price}$</h4>|<h4>Rating: {rating.rate}</h4>
          </div>
        </div>
      </Link>
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

export default ProductCard;
