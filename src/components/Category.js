import React from "react";
import useGetCategories from "../utils/useGetCategories";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = useGetCategories();
  console.log(categories);
  if (!categories) return;
  return (
    <div className="flex h-[400px] w-full justify-center items-center">
      <Link to={`/`}>
        <div className="m-2 p-2 h-16 w-auto min-w-[200px] bg-blue-200 flex flex-col justify-center items-center rounded-md cursor-pointer">
          <h4>{"All"}</h4>
          <h4>{categories.length}</h4>
        </div>
      </Link>
      {Object.keys(categories).map((item, index) => {
        return (
          <Link to={`/category/details/${item}`}>
            <div
              key={index}
              className="m-2 p-2 h-16 w-auto min-w-[200px] bg-blue-200 flex flex-col justify-center items-center rounded-md cursor-pointer"
            >
              <h4>{item}</h4>
              <h4>{categories[item].length}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
