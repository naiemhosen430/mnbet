import { onValue, ref } from "firebase/database";
import { dbbase } from "../firebase";

export default function getAllChalange() {
  const Ref = ref(dbbase, "chalange");

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
