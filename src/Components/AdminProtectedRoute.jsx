import { Navigate } from "react-router-dom";
import { getMe } from "../api/firebaseaction/getMe";

export default function AdminProtectedRoute({ children }) {
  const fatchData = async () => {
    let userid = localStorage.getItem("userid");
    const data = await getMe(userid);
    console.log({ data });
  };
  fatchData();
  return data.role === "admin" ? children : <Navigate to="/dashboad" />;

  // need to run getMe function with async but. but if i run async then children getting Object but need Array farmet. how to solve?
}
