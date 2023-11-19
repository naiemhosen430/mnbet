import React, { useState } from "react";
import { createGame } from "../../../api/firebaseaction/createGame";
import { useNavigate } from "react-router-dom";

export default function Addgame() {
  const navigate = useNavigate();
  const [gameBody, setGameBody] = useState({
    teamone: "",
    teamtwo: "",
    startDateTime: "",
    endDateTime: "",
  });

  const handleGameChange = (e) => {
    const { name, value } = e.target;
    setGameBody((prevData) => ({
      ...prevData,
      [name]: value,
      // Combine date and time into a single string
      startDateTime: name.includes("start")
        ? `${prevData.startData} ${value}`
        : prevData.startDateTime,
      endDateTime: name.includes("end")
        ? `${prevData.endData} ${value}`
        : prevData.endDateTime,
    }));
  };

  const handleSubmit = () => {
    const data = createGame(gameBody);
    if (data == "ok") {
      navigate("/");
    }
  };

  return (
    <>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-white p-4 py-10 text-center">
          Add a new game
        </h1>
        <div className="flex items-center justify-center my-10">
          <input
            type="text"
            className="block w-full rounded-lg p-2 px-4 bg-black text-white"
            name="teamone"
            onChange={handleGameChange}
            value={gameBody.teamone}
          />
          <span className="block text-center w-full p-2 px-4 bg-black text-white">
            VS
          </span>
          <input
            type="text"
            className="block w-full rounded-lg p-2 px-4 bg-black text-white"
            name="teamtwo"
            onChange={handleGameChange}
            value={gameBody.teamtwo}
          />
        </div>
        <div className="flex items-center justify-center my-10">
          <span className="block text-center w-full rounded-lg p-2 px-4 bg-black text-white">
            Start in
          </span>
          <input
            type="date"
            className="block w-full rounded-none p-2 px-4 bg-black text-white"
            name="startData"
            onChange={handleGameChange}
            value={gameBody.startData}
          />
          <input
            type="time"
            className="block w-full rounded-lg rounded-l-none p-2 px-4 bg-black text-white"
            name="startTime"
            onChange={handleGameChange}
            value={gameBody.startTime}
          />
        </div>
        <div className="flex items-center justify-center my-10">
          <span className="block text-center w-full rounded-lg p-2 px-4 bg-black text-white">
            End in
          </span>
          <input
            type="date"
            className="block w-full rounded-none p-2 px-4 bg-black text-white"
            name="endData"
            onChange={handleGameChange}
            value={gameBody.endData}
          />
          <input
            type="time"
            className="block w-full rounded-lg rounded-l-none p-2 px-4 bg-black text-white"
            name="endTime"
            onChange={handleGameChange}
            value={gameBody.endTime}
          />
        </div>
        <div className="flex items-center justify-center my-10">
          <button
            onClick={handleSubmit}
            className="p-2 bg-slate-600 text-white font-bold text-2xl block w-full rounded-lg shadow-2xl"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
