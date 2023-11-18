import { ref, set } from "firebase/database";
import { dbbase } from "../firebase";

export const createUser = (user) => {
  const refarence = ref(dbbase, "users/" + user._id);
  set(refarence, user);
};
