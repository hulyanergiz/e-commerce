import { data } from "../../data";

const HomeBottomCarousel = () => {
  return (
    <div>
      <div className="w-full flex flex-row relative items-center justify-center bg-[#23856D]">
        <div className=" flex flex-col gap-9 my-12 text-white text-start tracking-wide w-[35%] h-[427px] py-12">
          <h2 className="text-base font-bold w-[80%]">{data.slider[1].term}</h2>
          <h1 className="text-6xl  font-bold w-[80%]">
            {data.slider[1].title}
          </h1>
          <p className="w-[80%] text-xl">{data.slider[1].description}</p>
          <div className="flex flex-row items-center">
            <p className="text-2xl  pt-[11px] pr-8 ">{data.slider[1].price}</p>
            <button className=" w-[40%] text-start pl-6 py-3 text-2xl bg-[#2DC071] rounded-md">
              {data.slider[1].button}
            </button>
          </div>
        </div>
        <div className="w-[31%]">
          <img
            src={data.slider[1].image}
            alt="collection"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeBottomCarousel;
