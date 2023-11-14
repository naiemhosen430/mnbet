export default function BattingBox() {
  return (
    <>
      <div className="border-t-4 lg:w-10/12 m-auto mt-10 px-2 border-yellow-700 rounded-2xl">
        <div className="text-center p-2 bg-slate-800 text-white font-bold">
          Bangladesh vs India
        </div>
        <div className="flex justify-center items-center bg-white font-bold lg:text-xl text-sm">
          <div className="p-2 w-4/12 text-center">under 150 runs</div>
          <div className="p-2 w-4/12 text-center">beet 500 taka</div>
          <div className="p-2 w-4/12 text-center">play</div>
        </div>
        <div className="flex justify-center items-center bg-white font-bold lg:text-xl text-sm">
          <div className="p-2 w-4/12 text-center">151 to 250 runs</div>
          <div className="p-2 w-4/12 text-center">beet 500 taka</div>
          <div className="p-2 w-4/12 text-center">play</div>
        </div>
        <div className="flex justify-center items-center bg-white font-bold lg:text-xl text-sm">
          <div className="p-2 w-4/12 text-center">upto 251 runs</div>
          <div className="p-2 w-4/12 text-center">beet 500 taka</div>
          <div className="p-2 w-4/12 text-center">play</div>
        </div>
      </div>
    </>
  );
}
