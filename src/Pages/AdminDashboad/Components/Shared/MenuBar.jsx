import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMe } from "../../../../api/firebaseaction/getMe";
import { useUserAuth } from "../../../../Context/UseAuthContext";

export default function MenuBar() {
  const { user } = useUserAuth();
  const [myInfo, setMyInfo] = useState({
    name: "no name",
    balance: 0.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQUKnJyenabp9WJBm3UmgQGPdYrPDgCdQ3HYHH0VQZ1J6Pcd00N2AySxJfxitS7SL8nU&usqp=CAU",
  });

  // firebase query
  useEffect(() => {
    async function fatchData() {
      try {
        const data = await getMe(user.uid);
        if (data) {
          setMyInfo((prevData) => {
            return {
              ...prevData,
              name: data.name,
              balance: data.balance,
              image: data.profilepic,
            };
          });
        } else {
          console.log({ data });
          console.log("hm no data");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fatchData();
  }, [user]);
  return (
    <>
      <div className="lg:w-3/12 p-5 pb-0 bg-black lg:h-screen space-y-5">
        <div className="p-2 flex items-center justify-center space-x-4">
          <h1 className="text-xl font-bold text-white">{myInfo.name}</h1>
          <img
            className="w-8 h-8 rounded-full inline-block"
            src={`${myInfo.image}`}
            alt=""
          />
        </div>

        <div className="text-center p-5 pt-0">
          <h1 className="text-2xl p-2 font-bold text-white">
            {myInfo.balance}
          </h1>
          <h1 className="text-sm text-slate-400">Our Balance</h1>
        </div>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad"}
        >
          Dashboad
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad/addgame"}
        >
          Add Game
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad/editprofile"}
        >
          Edit Profile Info
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad/withdraw"}
        >
          Manage Withdraw
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad/diposit"}
        >
          Manage Diposit
        </Link>
        <Link
          className="block p-2 rounded-xl border-b-2 border-yellow-900 hover:bg-gray-900 text-white text-xl font-bold"
          to={"/admindashboad/support"}
        >
          Manage Support
        </Link>
      </div>
    </>
  );
}
