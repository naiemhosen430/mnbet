import { createBrowserRouter } from "react-router-dom";
import Betting from "../Pages/Betting/Betting";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "betting",
        element: <Betting />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
