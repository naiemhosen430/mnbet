import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="lg:p-10 py-5">
        <div className="lg:mx-10 backdrop-blur-md border border-white rounded-2xl p-5">
          <div className="flex justify-center items-center">
            <div className="w-4/12">
              <img
                className="lg:w-40 w-20 lg:h-50 h-20 block m-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupAZSlEcehQSIxhIWiwVLwkkfokFmutoTqbX-Hmxxev2H25uTGbvM-06PacyaCmrmFHA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="w-4/12">
              <h1 className="text-xl lg:text-4xl text-slate-500 font-bold lg:text-right text-center">
                সহজ ব্যাটিং বেশি টাকা
              </h1>
            </div>
            <div className="w-4/12">
              <img
                className="lg:w-40 w-20 lg:h-50 h-20 block m-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE8Nxq4ula9yfuY_qQAuksgN2jPrjj5xRZbrLHZpaGxlkToP_5525JKdH9KeGHM1CllM&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center p-5">
          <Link
            className="block p-5 rounded-lg bg-black text-white border-dotted border-4 lg:text-2xl text-lg shadow-2xl font-bold m-auto lg:w-5/12 w-10/12"
            to={"/dashboad/makechalange"}
          >
            Make your chalange
          </Link>
        </div>
      </div>
    </>
  );
}
