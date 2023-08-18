import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useGetCategories from "../utils/useGetCategories";

const Dashboard = () => {
  const [products, setProducts] = useState({});
  const categories = useGetCategories();

  if (!categories) return;
  return (
    <div>
      {Object.keys(categories).map((category, index) => {
        return (
          <div>
            <h4 className="font-bold text-xl">{category}</h4>
            <div>
              <ul className="ml-3 flex">
                {categories[category].map((item) => {
                  return (
                    <Link
                      to={`/productDetails/${item.category}/${item.id}`}
                      key={item.id}
                    >
                      <ProductCard info={item} />
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
