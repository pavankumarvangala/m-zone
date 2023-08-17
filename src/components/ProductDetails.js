import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import useFetchDetails from "../utils/useFetchDetails";

const ProductDetails = () => {
  const { category, id } = useParams();
  const product = useFetchDetails(id);
  if (!product) return;
  return (
    <div>
      <ProductDetailsCard info={product} />
    </div>
  );
};

export default ProductDetails;
