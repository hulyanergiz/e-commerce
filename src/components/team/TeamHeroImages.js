import { data } from "../../data";

const TeamHeroImages = () => {
  return (
    <div className="w-full flex flex-row gap-4">
      <img src={data.teamHeroImages[0]} className="flex w-[49%]" alt="hero" />
      <div className="flex flex-col gap-4 w-[25%]">
        <img src={data.teamHeroImages[1]} alt="hero" />
        <img src={data.teamHeroImages[2]} alt="hero" />
      </div>
      <div className="flex flex-col gap-4 w-[25%]">
        <img src={data.teamHeroImages[3]} alt="hero" />
        <img src={data.teamHeroImages[4]} alt="hero" />
      </div>
    </div>
  );
};
export default TeamHeroImages;
