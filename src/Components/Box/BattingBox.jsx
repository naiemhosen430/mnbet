import { useEffect, useState } from "react";
import getAllChalange from "../../api/firebaseaction/getAllChalange";

export default function BattingBox() {
  const [chalangeArray, setChalangeArray] = useState([]);

  useEffect(() => {
    getAllChalange()
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
            <div className="text-center p-2 bg-slate-800 text-white font-bold">
              {i.game}
            </div>
            <div className="flex justify-center items-center bg-white font-bold lg:text-xl text-sm">
              <div className="p-2 w-4/12 text-center">{i.statement}</div>
              <div className="p-2 w-4/12 text-center">{i.bet}</div>
              <div className="p-2 w-4/12 text-center">play</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
