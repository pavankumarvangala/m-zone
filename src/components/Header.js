import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px] w-full bg-blue-300 p-5">
      <ul className="flex gap-4 h-full items-center justify-end">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/category"}>
          <li>categories</li>
        </Link>
        <Link to={"/cart"}>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
