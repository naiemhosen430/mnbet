import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Shared/MenuBar";

export default function DashboadLayout() {
  return (
    <>
      <div className="lg:flex">
        <MenuBar />
        <Outlet />
      </div>
    </>
  );
}
