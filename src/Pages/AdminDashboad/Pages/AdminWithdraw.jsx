import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AdminWithdraw() {
  return (
    <>
      <div className="p-2 bg-slate-950 w-full px-4 flex items-center text-3xl">
        <div className="w-6/12">
          <Link to={"/dashboad"}>
            <FaArrowLeft className="text-white" />
          </Link>
        </div>
        <div className="w-6/12 text-right">
          <MdHelp className="inline-block text-white" />
        </div>
      </div>

      {/* main */}
      <div className="p-4">
        <div className="bg-slate-900 p-4 rounded-lg flex items-center">
          <h1 className="w-6/12 text-xl text-slate-200">MD Naiem</h1>
          <h1 className="w-6/12 text-right text-slate-400">MD Naiem</h1>
        </div>
      </div>
    </>
  );
}
