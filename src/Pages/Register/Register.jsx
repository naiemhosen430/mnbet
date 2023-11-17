import { FaGoogle } from "react-icons/fa";
import { gooogleSignUpHundler } from "../../api/firebase";
import { useUserAuth } from "../../Context/UseAuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [alert, setAlert] = useState(false);
  const [UserInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useUserAuth();

  useEffect(() => {
    if (localStorage.getItem("accesstoken")) {
      setAlert(true);
    }
  }, [localStorage]);

  // signup
  const sughnupHundler = async () => {
    try {
      const data = await signUp(UserInfo.email, UserInfo.password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const signupWithGoogleHandler = () => {
    try {
      gooogleSignUpHundler();
      setAlert(true);
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <>
      <section className="backdrop-blur-md lg:w-6/12 m-auto p-5 rounded-sm h-screen">
        <h1 className="text-4xl text-white font-bold text-center p-4 py-10">
          Join now
        </h1>
        {alert && (
          <div className="h-screen w-screen p-10 pt-60 fixed top-0 left-0 backdrop-blur-md">
            <div className="bg-white p-5 text-center rounded-2xl font-bold text-2xl">
              Great job! Go to dashboad
              <Link
                className="w-12/12 mt-2 bg-slate-800 text-xl text-violet-50 block p-2 rounded-md"
                to={"/dashboad"}
              >
                Ok
              </Link>
            </div>
          </div>
        )}

        <Link
          onClick={signupWithGoogleHandler}
          to={"/dashboad"}
          className="flex items-center justify-start space-x-4 w-11/12 m-auto p-4 shadow-2xl rounded-2xl text-xl font-bold text-black bg-white my-5"
        >
          <span className="text-center w-10/12 block">
            Sign in wtith Google
          </span>
          <FaGoogle className="text-center w-2/12 block" />
        </Link>
      </section>
    </>
  );
}

// {
//   /* <form className="lg:w-6/12 m-auto px-10">
//           <label
//             className="text-slate-400 text-xl block pt-4"
//             htmlFor="Username"
//           >
//             Write username
//           </label>
//           <input
//             className="bg-slate-900 rounded-3xl text-sm py-2 px-4 d my-2 block w-full"
//             id="Username"
//             type="text"
//             placeholder="Username"
//           />

//           <label className="text-slate-400 text-xl block pt-4" htmlFor="email">
//             Write email
//           </label>
//           <input
//             className="bg-slate-900 rounded-3xl text-sm py-2 px-4 d my-2 block w-full"
//             id="email"
//             name="email"
//             type="email"
//             placeholder="email"
//             onChange={(event) => {
//               setUserInfo({
//                 ...UserInfo,
//                 [event.target.name]: event.target.value,
//               });
//             }}
//           />

//           <label
//             className="text-slate-400 text-xl block pt-4"
//             htmlFor="password"
//           >
//             Write password
//           </label>
//           <input
//             className="bg-slate-900 rounded-3xl text-sm py-2 px-4 d my-2 block w-full"
//             id="password"
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={(event) => {
//               setUserInfo({
//                 ...UserInfo,
//                 [event.target.name]: event.target.value,
//               });
//             }}
//           />
//           <button
//             onClick={sughnupHundler}
//             className="block w-6/12 m-auto p-2 px-4 shadow-2xl rounded-full text-xl font-bold text-black bg-white my-5"
//           >
//             Register
//           </button>
//         </form>
//         <div className="block text-center">
//           <h1>OR</h1>
//         </div> */
// }
