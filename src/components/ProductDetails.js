import React, { useEffect, useState } from "react";
import { productsList } from "../utils/constants";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetails = () => {
  const [products, setProducts] = useState();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setProducts(productsList);
  }, []);
  if (!products) return;
  return (
    <div>
      {products[params.category].map((item) => {
        return (
          item.product_id == params.id && (
            <ProductDetailsCard
              key={params.id}
              category={params.category}
              info={item}
            />
          )
        );
      })}
    </div>
  );
};

export default ProductDetails;
