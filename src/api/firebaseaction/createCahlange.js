import { ref, set } from "firebase/database";
import { dbbase } from "../firebase";

export const createCahlange = (data) => {
  const refarence = ref(dbbase, "chalange/" + data.userid);
  set(refarence, data);
  return "ok";
};
