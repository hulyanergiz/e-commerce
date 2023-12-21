import { data } from "../../data";

const NeuralUniverse = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] flex lg:flex-row max-lg:flex-col justify-between items-center m-auto ">
        <div className="w-1/2 flex max-lg:w-[80%] max-md:w-full">
          <img
            src={data.neuralUniverse.image}
            alt="neural universe"
            className="w-full"
          />
        </div>
        <div className="w-[42%] flex flex-col  max-lg:w-[80%] max-md:w-full">
          <div className="flex flex-col gap-6 my-12 lg:text-start py-12 w-[89%] max-xl:w-full  max-lg:text-center">
            <h2 className="text-base font-bold text-[#BDBDBD]">
              {data.neuralUniverse.term}
            </h2>
            <h1 className="text-[40px]  font-bold  tracking-wider text-[#252B42]">
              {data.neuralUniverse.title}
            </h1>
            <p className="text-xl text-[#737373] tracking-wider">
              {data.neuralUniverse.description}
            </p>
            <div className="w-full flex sm:flex-row gap-2.5  max-lg:justify-center max-sm:flex-col max-sm:items-center">
              <button className="text-center px-7 py-3 text-sm text-white bg-[#2DC071] rounded-md max-sm:w-[150px] ">
                {data.neuralUniverse.button1}
              </button>
              <button className="text-center px-7 py-3 text-sm text-[#2DC071] border-solid border-[#2DC071] rounded-md max-sm:w-[150px] ">
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
