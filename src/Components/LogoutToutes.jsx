import { Navigate } from "react-router-dom";

export default function LogoutToutes({ children }) {
  let user = localStorage.getItem("user");
  return !user ? children : <Navigate to="/dashboad" />;
}
