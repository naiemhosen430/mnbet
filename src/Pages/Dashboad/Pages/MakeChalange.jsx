import React, { useEffect, useState } from "react";
import { createCahlange } from "../../../api/firebaseaction/createCahlange";
import { useNavigate } from "react-router-dom";

export default function MakeChallenge() {
  const navigate = useNavigate();
  const [selectedGameOption, setSelectedGameOption] = useState({
    game: "",
    statement: "",
    bet: 0,
    userid: "",
    perticipators: [],
  });
  const [team, setTeam] = useState([]);
  const [singleTeam, setSingleTeam] = useState({
    mainTeam: "",
  });
  const [showChallengeBox, setShowChallengeBox] = useState(false);
  const [showPriceBox, setShowPriceBox] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleGameChange = (e) => {
    const { name, value } = e.target;
    setSelectedGameOption((prevSelectedGameOption) => ({
      ...prevSelectedGameOption,
      [name]: value,
    }));
  };

  const handleGameChangeForMainTeam = (e) => {
    const { name, value } = e.target;
    setSingleTeam((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setShowPriceBox(true);
  };

  useEffect(() => {
    if (selectedGameOption.game !== "") {
      setShowChallengeBox(true);
      const teamArray = selectedGameOption.game.split(" VS ");
      setTeam(teamArray);
    } else {
      setShowChallengeBox(false);
      setTeam([]);
    }
  }, [selectedGameOption.game]);

  useEffect(() => {
    setSelectedGameOption((predata) => ({
      ...predata,
      statement: singleTeam.mainTeam + " will be win",
    }));
  }, [singleTeam]);

  useEffect(() => {
    if (selectedGameOption.bet === 0 || selectedGameOption.bet === null) {
      setShowSubmit(false);
    } else {
      setShowSubmit(true);
    }
  }, [selectedGameOption.bet]);

  // api integration
  const hundleSubmit = () => {
    const myid = localStorage.getItem("userid");
    setSelectedGameOption((predata) => ({
      ...predata,
      userid: myid,
    }));
    if (selectedGameOption.userid !== "") {
      const data = createCahlange(selectedGameOption);
      console.log(data);
      if (data == "ok") {
        navigate("/");
      }
    } else {
      console.log("somethig wents wrong");
    }
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-white text-3xl font-bold p-2 text-center">
          Make a challenge
        </h1>
        <div className="p-4">
          <label
            className="block text-xl p-2 text-white font-bold"
            htmlFor="game"
          >
            Select a game
          </label>
          <select
            className="block w-full rounded-lg p-2 px-4 bg-black text-white"
            name="game"
            id="game"
            onChange={handleGameChange}
            value={selectedGameOption.game}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Ban VS India">Ban VS India</option>
          </select>
        </div>

        {showChallengeBox && (
          <div className="p-4 flex items-center justify-center">
            <select
              className="block w-full rounded-lg rounded-r-none p-2 px-4 bg-black text-white"
              name="mainTeam"
              id="mainTeam"
              onChange={handleGameChangeForMainTeam}
              value={singleTeam.mainTeam}
            >
              {team.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="block w-full rounded-lg rounded-l-none p-2 px-4 bg-black text-white"
              name="statement"
              id="statement"
              disabled
              value={"will be win"}
            />
          </div>
        )}

        {showPriceBox && (
          <div className="p-4 flex items-center justify-center">
            <input
              type="text"
              className="block w-full rounded-lg rounded-r-none p-2 px-4 bg-black text-white"
              name="statement"
              id="statement"
              disabled
              value={"Bet for (taka)"}
            />
            <input
              type="number"
              className="block w-full rounded-lg rounded-l-none p-2 px-4 bg-black text-white"
              name="bet"
              id="bet"
              onChange={handleGameChange}
              value={selectedGameOption.bet}
            />
          </div>
        )}

        {showSubmit && (
          <div className="p-4 flex items-center justify-center">
            <button
              onClick={hundleSubmit}
              className="p-2 bg-slate-600 text-white font-bold text-2xl block w-full rounded-lg shadow-2xl"
            >
              Create
            </button>
          </div>
        )}
      </div>
    </>
  );
}
