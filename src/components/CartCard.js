import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const CartCard = ({ info }) => {
  const { image, title, price, rating, description } = info;
  const dispatch = useDispatch();
  return (
    <div className="m-2 flex items-center h-[200px] w-[900px] border border-black rounded-lg p-3">
      <div className="h-full w-[25%] p-5">
        <img src={image} className="h-full w-full" alt="product" />
      </div>
      <ul className="h-full w-[60%] flex flex-col gap-y-3">
        <li>{title}</li>
        <li className="text-ellipsis overflow-hidden">{description}</li>
        <li>{price}</li>
        <li>{rating?.rate}</li>
      </ul>
      <div className="h-full w-[15%] flex items-center justify-center">
        <button onClick={() => dispatch(removeItem(info))}>🗑️</button>
      </div>
    </div>
  );
};

export default CartCard;
