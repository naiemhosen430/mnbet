export default function Dashboad() {
  return (
    <>
      <div className="lg:w-9/12 h-screen backdrop-blur-md lg:p-5">
        <div className="lg:p-5 ">
          <h1 className="p-5 bg-slate-900 text-white text-2xl font-bold">
            Today playing
          </h1>
          <div className="bg-white text-lg text-black font-bold p-5">
            You are not playing today
          </div>
        </div>

        <div className="lg:p-5 ">
          <h1 className="p-5 bg-slate-900 text-white text-2xl font-bold">
            Today Win
          </h1>
          <div className="bg-white text-lg text-black font-bold p-5">
            You are not playing today. Start play to win money
          </div>
        </div>
        <div className="lg:p-5 ">
          <h1 className="p-5 bg-slate-900 text-white text-2xl font-bold">
            Today lost
          </h1>
          <div className="bg-white text-lg text-black font-bold p-5">
            You are not playing today. Start play to analising
          </div>
        </div>
      </div>
    </>
  );
}
