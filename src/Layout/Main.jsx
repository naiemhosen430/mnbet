import { Outlet } from "react-router-dom";
import Menu from "../Components/Shared/Menu";

export default function Main() {
  const divStyle = {
    background:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdxQtKoxsmeWisIxGEuqI-A25WmUyN0vugpmm4SSKuKHFeQxUmVMEEkekJjcH4-NzcQI&usqp=CAU')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <>
      <div style={divStyle}>
        <Menu />
        <Outlet />
      </div>
    </>
  );
}
