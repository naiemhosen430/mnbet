import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  let user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
}
