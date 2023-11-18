import { Outlet } from "react-router-dom";

export default function DashboadLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
