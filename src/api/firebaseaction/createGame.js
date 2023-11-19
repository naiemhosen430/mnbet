import { ref, push, set } from "firebase/database";
import { dbbase } from "../firebase";

export const createGame = (data) => {
  const gamesRef = ref(dbbase, "games");
  const newGameRef = push(gamesRef);
  set(newGameRef, data);
  return "ok";
};
