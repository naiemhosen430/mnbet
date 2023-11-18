import { Navigate } from "react-router-dom";

export default function UserProtectedRoute({ children }) {
  let role = localStorage.getItem("role");
  console.log(role);
  return role === "user" ? children : <Navigate to="/admindashboad" />;
}
