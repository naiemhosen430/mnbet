import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdReorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Menu() {
  const [menuBox, setMenuBox] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  // onclick hundler
  const toggleMenuBox = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };
  return (
    <>
      <div className="flex sticky top-0 backdrop-blur-md z-20 justify-center items-center py-2 px-4">
        <div className="lg:w-3/12 w-5/12 text-white">
          <Link to={"/"} className="font-bold block text-2xl">
            MNBet
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="lg:w-6/12 hidden z-20 lg:flex items-center shadow-md rounded-md justify-center"
        >
          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/betting"}
          >
            Betting
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/dashboad"}
          >
            Dashboad
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/"}
          >
            Review
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/"}
          >
            Contract
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/"}
          >
            About me
          </Link>

          <Link
            className="py-2 px-4 text-center rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
            to={"/"}
          >
            FAQ
          </Link>
        </div>

        <div className="lg:w-3/12 w-4/12 space-x-4 lg:flex mx-4 text-center">
          <Link
            className="py-2 hidden px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="py-2 hidden px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-700 text-white font-bold"
            to={"/register"}
          >
            Register
          </Link>
          <Link
            className="py-2 block px-4 lg:hidden w-full rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
            to={"/login"}
          >
            Login
          </Link>
        </div>

        <div
          onClick={toggleMenuBox}
          className="w-3/12 lg:hidden text-right font-bold text-white p-2 py-0 rounded-md hover:text-slate-700"
        >
          <MdReorder className="text-4xl inline-block" />
        </div>
      </div>

      {menuBox && (
        <div className="h-screen backdrop-blur-md" data-aos="fade-right">
          <div className="shadow-md rounded-md">
            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              onClick={toggleMenuBox}
              to={"/betting"}
            >
              Betting
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              to={"/dashboad"}
              onClick={toggleMenuBox}
            >
              Dashboad
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              to={"/"}
              onClick={toggleMenuBox}
            >
              Review
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              to={"/"}
              onClick={toggleMenuBox}
            >
              Contract
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              to={"/"}
              onClick={toggleMenuBox}
            >
              About me
            </Link>

            <Link
              className="py-2 px-4 rounded-md hover:bg-slate-500 text-slate-700 font-bold block"
              to={"/"}
              onClick={toggleMenuBox}
            >
              FAQ
            </Link>
          </div>

          <div className="space-x-4 my-20 lg:flex mx-4 text-center">
            <Link
              onClick={toggleMenuBox}
              className="py-2 px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-500 text-white font-bold"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              onClick={toggleMenuBox}
              className="py-2 px-4 lg:block w-6/12 rounded-md shadow-md hover:bg-slate-700 bg-slate-800 text-white font-bold"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
