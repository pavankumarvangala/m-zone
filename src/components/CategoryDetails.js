import React from "react";
import { useParams, Link } from "react-router-dom";
import useGetCategories from "../utils/useGetCategories";
import ProductCard from "./ProductCard";

const CategoryDetails = (item) => {
  const { id } = useParams();
  const availCategories = useGetCategories();
  if (!availCategories) return;
  console.log(availCategories);
  console.log(id);
  return (
    <div>
      <h4>{id}</h4>
      <div className="flex">
        {availCategories[id].map((item) => {
          return (
            <Link
              to={`/productDetails/${item.category}/${item.id}`}
              key={item.id}
            >
              <ProductCard info={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDetails;
