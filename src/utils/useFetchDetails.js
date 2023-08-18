import React, { useEffect, useState } from "react";

const useFetchDetails = (id) => {
  const [products, setProducts] = useState({});
  const fetchData = async () => {
    const data = await fetch(
      id
        ? `https://fakestoreapi.com/products/${id}`
        : `https://fakestoreapi.com/products`
    );
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export default useFetchDetails;
