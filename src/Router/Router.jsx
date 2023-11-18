import { createBrowserRouter } from "react-router-dom";
import Betting from "../Pages/Betting/Betting";
import Register from "../Pages/Register/Register";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Dashboad from "../Pages/Dashboad/Dashboad";
import DashboadLayout from "../Pages/Dashboad/Layout/DashboadLayout";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import LogoutToutes from "../Components/LogoutToutes";
import EditProfile from "../Pages/Dashboad/Pages/EditProfile";
import Withdraw from "../Pages/Dashboad/Pages/Withdraw";
import Diposit from "../Pages/Dashboad/Pages/Diposit";
import Support from "../Pages/Dashboad/Pages/Support";

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
          {
            path: "editprofile",
            element: <EditProfile />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "diposit",
            element: <Diposit />,
          },
          {
            path: "support",
            element: <Support />,
          },
        ],
      },
    ],
  },
]);
