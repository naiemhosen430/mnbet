import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Diposit() {
  return (
    <>
      <div>
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
      </div>
      <div className="w-12/12 lg:w-5/12 m-auto md:w-8/12 p-5 rounded-md bg-slate-900">
        <div className="p-2 text-white font-bold text-xl lg:text-3xl text-center">
          Your current balance is 0 taka
        </div>
        <div className="p-5 text-white font-bold bg-slate-800 text-sm lg:text-lg text-center">
          Send your money to our official number and send us your transaction id
          and sended account number
        </div>
        {/* numbers */}
        <div className="mt-2">
          <h1 className="text-yellow-500 p-2 text-center lG:text-xl text-lg">
            Our Bkash Account
          </h1>
          <h1 className="text-white font-bold-500 text-center lG:text-2xl text-lg">
            01920679575
          </h1>
          <h1 className="text-white font-bold-500 text-center lG:text-2xl text-lg">
            01920679575
          </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-yellow-500 p-2 text-center lG:text-xl text-lg">
            Our Nagad Account
          </h1>
          <h1 className="text-white font-bold-500 text-center lG:text-2xl text-lg">
            01920679575
          </h1>
          <h1 className="text-white font-bold-500 text-center lG:text-2xl text-lg">
            01920679575
          </h1>
        </div>
        {/* submit */}
        <div>
          <div className="p-2">
            <label className="block p-2 text-white text-lg" htmlFor="number">
              Write your accout number
            </label>
            <input
              className="block p-2 px-4 bg-black rounded-md text-lg w-full"
              type="text"
              id="number"
              placeholder="01xxxxxxxxx"
            />
          </div>
          <div className="p-2">
            <label className="block p-2 text-white text-lg" htmlFor="number">
              Write your transaction id
            </label>
            <input
              className="block p-2 px-4 bg-black rounded-md text-lg w-full"
              type="text"
              id="number"
              placeholder="jhdccjsdDCdc45"
            />
          </div>
          <div className="p-4">
            <button className="w-full p-2 bg-slate-600 rounded-md text-white font-bold text-xl block">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
