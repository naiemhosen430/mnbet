import { onValue, ref } from "firebase/database";
import { dbbase } from "../firebase";

export default function getAllGames() {
  const Ref = ref(dbbase, "games");

  return new Promise((resolve, reject) => {
    onValue(
      Ref,
      (snapShot) => {
        const data = [];
        snapShot.forEach((childSnapshot) => {
          data.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        resolve(data);
      },
      (error) => {
        console.error("Error reading data:", error);
        reject(error);
      }
    );
  });
}
