import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import GetOneGameById from "../../../api/firebaseaction/GetOneGameById.jsxx";

export default function GamesDetails() {
  const { id } = useParams();

  // call api
  const [singleGame, setSingleGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { singleGame: fetchedGame, error } = GetOneGameById(id);

  useEffect(() => {
    if (fetchedGame) {
      setSingleGame(fetchedGame);
      setLoading(false);
    }
  }, [fetchedGame]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="p-2 bg-slate-950 w-full px-4 flex justify-center items-center text-sm">
        <div className="w-1/12">
          <Link to={"/dashboad"}>
            <FaArrowLeft className="text-white" />
          </Link>
        </div>
        <div className="w-10/12 flex px-4 justify-center items-center">
          <h1 className="text-slate-200 rounded-tr-full bg-slate-900 w-5/12 font-bold text-center">
            {singleGame.teamone}
          </h1>
          <h1 className="text-slate-500 w-2/12 text-center">VS</h1>
          <h1 className="text-slate-200 rounded-tl-full bg-slate-900 w-5/12 font-bold text-center">
            {singleGame.teamtwo}
          </h1>
        </div>
        <div className="w-1/12 text-right">
          <MdHelp className="inline-block text-white" />
        </div>
      </div>
      <div className="p-5">
        <table className="p-2 bg-black w-full">
          <tbody>
            <tr className="bg-slate-900 text-slate-500 text-xs">
              <th className="text-left w-8/12 font-bold px-2 p-1">Event</th>
              <th className="font-bold">yes</th>
              <th className="font-bold">No</th>
            </tr>
            <tr className="bg-slate-900 text-yellow-200 text-xs">
              <th className="text-left p-2">
                Bangladesh 1st over 2 witcket for 500 taka
              </th>
              <th>1500</th>
              <th>200 </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
