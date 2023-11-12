import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="backdrop-blur-md lg:w-6/12 m-auto p-5 rounded-sm h-screen">
        <h1 className="text-4xl text-white font-bold text-center p-4 py-10">
          Log in here
        </h1>
        <form className="lg:w-6/12 m-auto px-10">
          <label className="text-slate-400 text-xl block pt-4" htmlFor="email">
            Write username/email
          </label>
          <input
            className="bg-slate-900 rounded-3xl text-sm py-2 px-4 d my-2 block w-full"
            id="email"
            type="text"
            placeholder="Username / email"
          />

          <label
            className="text-slate-400 text-xl block pt-4"
            htmlFor="password"
          >
            Write password
          </label>
          <input
            className="bg-slate-900 rounded-3xl text-sm py-2 px-4 d my-2 block w-full"
            id="password"
            type="password"
            placeholder="Password"
          />
          <button className="block w-6/12 m-auto p-2 px-4 shadow-2xl rounded-full text-xl font-bold text-black bg-white my-5">
            Login
          </button>
        </form>
        <div className="block text-center">
          <h1>OR</h1>
        </div>
        <div className="block text-center text-xl p-4 text-slate-400">
          <h1>
            New here?{" "}
            <Link className="text-white font-bold" to={"/register"}>
              join now
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
}
