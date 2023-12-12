import { data } from "../../data";

const HomeCarousel = () => {
  return (
    <div>
      <div className="w-full flex relative items-center justify-center">
        <div className="w-full">
          <img
            src={data.slider[0].image}
            alt="collection"
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-9 my-12 absolute text-white text-start tracking-wide w-[72%] h-[427px] py-12">
          <h2 className="text-base font-bold w-[58%]">{data.slider[0].term}</h2>
          <h1 className="text-6xl  font-bold w-[58%]">
            {data.slider[0].title}
          </h1>
          <p className="w-[36%] text-xl">{data.slider[0].description}</p>
          <button className=" w-[21%] text-start pl-7 py-3 text-2xl bg-[#2DC071]">
            {data.slider[0].button}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeCarousel;
