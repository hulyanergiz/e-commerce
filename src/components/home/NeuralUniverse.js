import { data } from "../../data";

const NeuralUniverse = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] flex flex-row justify-between items-center m-auto">
        <div className="w-1/2 flex ">
          <img
            src={data.neuralUniverse.image}
            alt="neural universe"
            className="w-full"
          />
        </div>
        <div className="w-[42%] flex flex-col">
          <div className="flex flex-col gap-6 my-12  text-start tracking-wide w-[60%] py-12">
            <h2 className="text-base font-bold text-[#BDBDBD]">
              {data.neuralUniverse.term}
            </h2>
            <h1 className="text-[40px]  font-bold  text-[#252B42]">
              {data.neuralUniverse.title}
            </h1>
            <p className="text-xl text-[#737373]">
              {data.neuralUniverse.description}
            </p>
            <div className="w-full flex flex-row gap-2.5">
              <button className="text-start px-10 py-3 text-sm text-white bg-[#2DC071] rounded-md">
                {data.neuralUniverse.button1}
              </button>
              <button className="text-start px-10 py-3 text-sm text-[#2DC071] border-solid border-[#2DC071] rounded-md">
                {data.neuralUniverse.button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NeuralUniverse;
