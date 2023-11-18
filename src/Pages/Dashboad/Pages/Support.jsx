import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Support() {
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
    </>
  );
}
