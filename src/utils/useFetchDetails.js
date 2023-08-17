import React, { useEffect, useState } from "react";

const useFetchDetails = (id) => {
  const [products, setProducts] = useState({});
  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    setProducts(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export default useFetchDetails;
