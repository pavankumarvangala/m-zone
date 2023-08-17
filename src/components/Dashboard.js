import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState({});

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    segData(json);
  };
  const segData = (json) => {
    const revProducts = {};
    json.forEach((item) => {
      const category = item.category;
      category in revProducts
        ? revProducts[category].push(item)
        : (revProducts[category] = [item]);
    });
    setProducts(revProducts);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!products) return;
  return (
    <div>
      {Object.keys(products).map((category, index) => {
        return (
          <div key={index}>
            <h4 className="font-bold text-xl">{category}</h4>
            <div>
              <ul className="ml-3 flex">
                {products[category].map((item) => {
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
