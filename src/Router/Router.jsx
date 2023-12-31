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
import AdminProtectedRoute from "../Components/AdminProtectedRoute";
import DashboadLayoutAdmin from "../Pages/AdminDashboad/Layout/DashboadLayoutAdmin";
import AdminDashboad from "../Pages/AdminDashboad/AdminDashboad";
import UserProtectedRoute from "../Components/UserProtectedRoute";
import AdminDiposit from "../Pages/AdminDashboad/Pages/AdminDiposit";
import AdminWithdraw from "../Pages/AdminDashboad/Pages/AdminWithdraw";
import MakeChalange from "../Pages/Dashboad/Pages/MakeChalange";
import Addgame from "../Pages/AdminDashboad/Pages/Addgame";
import GamesDetails from "../Pages/Dashboad/Pages/GamesDetails";

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
            <UserProtectedRoute>
              <DashboadLayout />
            </UserProtectedRoute>
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
            path: "gamesdetails/:id",
            element: <GamesDetails />,
          },
          {
            path: "makechalange",
            element: <MakeChalange />,
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
      {
        path: "admindashboad/",
        element: (
          <ProtectedRoutes>
            <AdminProtectedRoute>
              <DashboadLayoutAdmin />
            </AdminProtectedRoute>
          </ProtectedRoutes>
        ),
        children: [
          {
            path: "",
            element: <AdminDashboad />,
          },
          {
            path: "editprofile",
            element: <EditProfile />,
          },
          {
            path: "addgame",
            element: <Addgame />,
          },
          {
            path: "withdraw",
            element: <AdminWithdraw />,
          },
          {
            path: "diposit",
            element: <AdminDiposit />,
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
