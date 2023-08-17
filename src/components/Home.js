import React from "react";
import Header from "./Header";
// import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
