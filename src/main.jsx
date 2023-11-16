import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UseAuthContext";

import { router } from "./Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserAuthContextProvider>
    <RouterProvider router={router} />
  </UserAuthContextProvider>
);
