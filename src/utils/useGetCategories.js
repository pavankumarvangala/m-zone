import React, { useEffect, useState } from "react";

const useGetCategories = () => {
  const [data, setData] = useState();
  const revProducts = {};
  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const json = await data.json();
    json.forEach((item) => {
      const category = item.category;
      category in revProducts
        ? revProducts[category].push(item)
        : (revProducts[category] = [item]);
    });
    setData(revProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useGetCategories;
