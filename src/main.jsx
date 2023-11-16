import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UseAuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
