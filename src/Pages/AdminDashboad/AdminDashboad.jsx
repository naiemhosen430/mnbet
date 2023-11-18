import MenuBar from "./Components/Shared/MenuBar";

export default function AdminDashboad() {
  return (
    <>
      <div className="lg:flex lg:justify-center">
        <MenuBar />
        <div className="lg:w-9/12 h-screen backdrop-blur-md lg:p-5">
          <div className="lg:p-5 ">
            <h1 className="p-5 bg-slate-900 text-white text-2xl font-bold">
              Today playing
            </h1>
            <div className="bg-white text-lg text-black font-bold p-5">
              No one is playing
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
