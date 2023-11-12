import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Betting from "../Pages/Betting/Betting";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Layout/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        element: <Home />,
      },
      {
        path: "/betting",
        element: <Betting />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
