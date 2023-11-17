import { createBrowserRouter } from "react-router-dom";
import Betting from "../Pages/Betting/Betting";
import Register from "../Pages/Register/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Dashboad from "../Pages/Dashboad/Dashboad";
import DashboadLayout from "../Pages/Dashboad/Layout/DashboadLayout";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import LogoutToutes from "../Components/LogoutToutes";

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
        path: "register",
        element: (
          <LogoutToutes>
            <Register />
          </LogoutToutes>
        ),
      },
      {
        path: "dashboad/",
        element: (
          <ProtectedRoutes>
            <DashboadLayout />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: "",
            element: <Dashboad />,
          },
        ],
      },
    ],
  },
]);
