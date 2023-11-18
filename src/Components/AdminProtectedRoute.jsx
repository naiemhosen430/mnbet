import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  let role = localStorage.getItem("role");
  return role === "admin" ? children : <Navigate to="/dashboad" />;
}
