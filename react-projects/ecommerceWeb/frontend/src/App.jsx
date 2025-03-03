import "./App.css";
import { Navbar } from "./components/UI/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout"
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from "./Pages/ShopCategory";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Shop />
      },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: ":productId",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginSignup />,
        },
        {
          path: "/mens",
          element: <ShopCategory category="mens" />,
        },
        {
          path: "/womens",
          element: <ShopCategory category="womens" />,
        },
        {
          path: "/kids",
          element: <ShopCategory category="kids" />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
