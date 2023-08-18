import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const products = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("from clear cart");
    dispatch(clearCart);
  };
  return (
    <div className="h-full w-full mt-20 flex flex-col items-center justify-center">
      <button
        className="p-2 m-2 bg-blue-300 rounded-md"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {products.length > 0 ? (
        <div>
          {products.map((item) => {
            return <CartCard key={item.id} info={item} />;
          })}
        </div>
      ) : (
        <div className="h-[200px] w-[600px] border border-black rounded-lg flex items-center justify-center">
          <h4>No Items in cart to Proceed</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
