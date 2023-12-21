import { data } from "../../data";

const AboutTop = () => {
  return (
    <div className="w-[73%] m-auto flex lg:flex-row max-lg:flex-col max-lg:items-center">
      <div className="lg:w-1/2 max-lg:w-full flex flex-col lg:items-start max-lg:items-center  py-40  gap-9">
        <h3 className="text-base font-bold tracking-wide">ABOUT COMPANY</h3>
        <h1 className="text-6xl font-bold tracking-wider">ABOUT US</h1>
        <p className="text-xl tracking-wider lg:text-start max-lg:text-center">
          We know how large objects will act, but things on a small scale
        </p>
        <button
          className="w-[193px] py-4 bg-[#23A6F0] text-white text-sm font-bold tracking-wider rounded-[5px]"
          type="submit"
        >
          Get Quote Now
        </button>
      </div>
      <div className="w-1/2 flex max-lg:m-auto">
        <img
          src={data.about[0]}
          alt="about"
          className="flex relative object-contain max-lg:-translate-y-32"
        />
        <img
          src={data.about[1]}
          alt="about"
          className="flex absolute ml-[7%] object-contain w-[50%] max-lg:-translate-y-48 max-lg:-translate-x-20"
        />
        <img
          src={data.about[2]}
          alt="about"
          className="flex absolute object-contain  translate-y-12 translate-x-12 max-lg:-translate-x-20 max-lg:-translate-y-32"
        />
        <img
          src={data.about[3]}
          alt="about"
          className="flex absolute object-contain sm:translate-y-72 sm:translate-x-96 sm:ml-60 max-sm:translate-y-4"
        />
        <img
          src={data.about[4]}
          alt="about"
          className="flex absolute object-contain  sm:translate-y-96 sm:mt-20 max-sm:translate-y-8 max-sm:left-28"
        />
        <img
          src={data.about[5]}
          alt="about"
          className="flex absolute object-contain  sm:translate-y-20 sm:translate-x-96 sm:ml-[10%] max-sm:-translate-y-24 max-sm:translate-x-72"
        />
      </div>
    </div>
  );
};
export default AboutTop;
