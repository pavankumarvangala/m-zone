import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <h4>Welcome to M-Zone</h4>
      <RouterProvider router={appRouter} />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productDetails/:category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default App;
