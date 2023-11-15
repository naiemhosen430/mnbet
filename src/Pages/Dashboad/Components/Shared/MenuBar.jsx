import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <>
      <div className="lg:w-3/12 p-5 bg-black h-screen space-y-5">
        <div className="text-center p-5">
          <h1 className="text-2xl p-2 font-bold text-white">0.0 taka</h1>
          <h1 className="text-sm text-slate-400">Your Balance</h1>
          <Link
            className="text-sm block mt-2 p-1 px-4 rounded-2xl bg-slate-600 text-white w-4/12 m-auto"
            to={"/addmoney"}
          >
            Add
          </Link>
        </div>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/Dashboad"}
        >
          Dashboad
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/editprofile"}
        >
          Edit Profile Info
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/withdraw"}
        >
          Withdraw
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/support"}
        >
          Support
        </Link>
      </div>
    </>
  );
}
