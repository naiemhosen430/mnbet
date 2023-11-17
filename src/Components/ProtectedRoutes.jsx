import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  let accesstoken = localStorage.getItem("accesstoken");
  return accesstoken ? children : <Navigate to="/register" />;
}
