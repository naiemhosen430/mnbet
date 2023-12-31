import { useEffect, useState } from "react";
import getAllGames from "../../api/firebaseaction/getAllGames";
import { Link } from "react-router-dom";

export default function BattingBox() {
  const [chalangeArray, setChalangeArray] = useState([]);

  useEffect(() => {
    getAllGames()
      .then((data) => {
        console.log(data);
        setChalangeArray(data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log({ chalangeArray });
  return (
    <>
      <div className="border-t-4 lg:w-10/12 m-auto mt-10 px-2 border-yellow-700 rounded-2xl">
        {chalangeArray.map((i) => (
          <div key={i.id}>
            <div className="flex items-center text-sm justify-center p-1 text-yellow-950 bg-white font-bold">
              <h1 className="w-8/12">
                {i.teamone} vs {i.teamtwo}
              </h1>
              <Link
                to={`/dashboad/gamesdetails/${i.id}`}
                className="block text-center text-white w-2/12 bg-slate-500 rounded-2xl"
              >
                Play
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
("");
