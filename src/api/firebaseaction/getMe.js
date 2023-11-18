import { onValue, ref } from "firebase/database";
import { dbbase } from "../firebase";

export const getMe = (uid) => {
  const userCollectionRef = ref(dbbase, `users/` + uid, "/distance");

  return new Promise((resolve, reject) => {
    onValue(
      userCollectionRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      {
        onlyOnce: true,
      }
    );
  });
};
