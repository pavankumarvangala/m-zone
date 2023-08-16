import React, { useEffect, useState } from "react";
import { productsList } from "../utils/constants";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(productsList);
  }, []);

  if (!products) return;
  return (
    <div>
      {Object.keys(products).map((catogery, index) => (
        <div key={index}>
          <h4 className="font-bold text-xl">{catogery}</h4>
          <ul className="ml-3 flex">
            {products[catogery].map((item, index) => (
              <Link
                to={`/productDetails/${catogery}/${item.product_id}`}
                key={index}
              >
                <ProductCard info={item} />
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
