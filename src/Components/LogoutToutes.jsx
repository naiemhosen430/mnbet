import { Navigate } from "react-router-dom";

export default function LogoutToutes({ children }) {
  let accesstoken = localStorage.getItem("accesstoken");

  return !accesstoken ? children : <Navigate to="/dashboad" />;
}
