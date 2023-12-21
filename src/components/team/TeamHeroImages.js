import { data } from "../../data";

const TeamHeroImages = () => {
  return (
    <div className="w-full flex md:flex-row max-md:flex-col gap-4">
      <img
        src={data.teamHeroImages[0]}
        className="flex md:w-[49%] max-md:w-full"
        alt="hero"
      />
      <div className="flex md:flex-col max-md:flex-row gap-4 md:w-[25%] max-md:w-full">
        <img
          src={data.teamHeroImages[1]}
          alt="hero"
          className="max-md:w-[48%]"
        />
        <img
          src={data.teamHeroImages[2]}
          alt="hero"
          className="max-md:w-[48%]"
        />
      </div>
      <div className="flex md:flex-col max-md:flex-row gap-4 md:w-[25%] max-md:w-full">
        <img
          src={data.teamHeroImages[3]}
          alt="hero"
          className="max-md:w-[48%]"
        />
        <img
          src={data.teamHeroImages[4]}
          alt="hero"
          className="max-md:w-[48%]"
        />
      </div>
    </div>
  );
};
export default TeamHeroImages;
