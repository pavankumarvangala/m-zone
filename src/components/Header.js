import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="h-[80px] w-full bg-blue-300 p-5 sticky top-0">
      <ul className="flex gap-4 h-full items-center justify-end">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/category"}>
          <li>categories</li>
        </Link>
        <Link to={"/cart"}>
          <li>Cart {cartItems.length > 0 && "- " + cartItems.length}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
