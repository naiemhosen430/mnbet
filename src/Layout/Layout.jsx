import { Outlet } from "react-router-dom";
import Menu from "../Components/Shared/Menu";

export default function Layout() {
  return (
    <>
      <>
        <Menu />
        <Outlet />
      </>
    </>
  );
}
