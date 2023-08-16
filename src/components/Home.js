import React, { useEffect, useState } from "react";
import { productsList } from "../utils/constants";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(productsList);
  }, []);

  if (!products) return;
  return (
    <div>
      {products && <h4>Products available</h4>}
      {console.log(products)}
      {Object.keys(products).map((catogery, index) => (
        <div key={index}>
          <h4 className="font-bold text-xl">{catogery}</h4>
          <ul className="ml-3 flex">
            {products[catogery].map((item, index) => (
              <ProductCard info={item} key={index} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
