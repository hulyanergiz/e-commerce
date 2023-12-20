import { data } from "../../data";

const AboutTop = () => {
  return (
    <div className="w-[73%] m-auto flex flex-row">
      <div className="w-1/2 flex flex-col items-start py-40  gap-9">
        <h3 className="text-base font-bold tracking-wide">ABOUT COMPANY</h3>
        <h1 className="text-6xl font-bold tracking-wider">ABOUT US</h1>
        <p className="text-xl tracking-wider text-start">
          We know how large objects will act, but things on a small scale
        </p>
        <button
          className="w-[193px] py-4 bg-[#23A6F0] text-white text-sm font-bold tracking-wider rounded-[5px]"
          type="submit"
        >
          Get Quote Now
        </button>
      </div>
      <div className="w-1/2 flex">
        <img
          src={data.about[0]}
          alt="about"
          className=" flex relative object-scale-down"
        />
        <img
          src={data.about[1]}
          alt="about"
          className=" flex absolute ml-[7%] object-scale-down "
        />
        <img
          src={data.about[2]}
          alt="about"
          className=" flex absolute  translate-y-12 translate-x-12"
        />
        <img
          src={data.about[3]}
          alt="about"
          className=" flex absolute translate-y-72 translate-x-96 ml-60"
        />
        <img
          src={data.about[4]}
          alt="about"
          className="flex absolute translate-y-96 mt-20"
        />
        <img
          src={data.about[5]}
          alt="about"
          className="flex absolute  translate-y-20 translate-x-96 ml-[10%]"
        />
      </div>
    </div>
  );
};
export default AboutTop;
