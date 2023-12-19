import { data } from "../../data";

const TeamHeroImages = () => {
  return (
    <div className="w-full flex flex-row gap-2">
      <img src={data.teamHeroImages[0]} />
      <div className="flex flex-col gap-2">
        <img src={data.teamHeroImages[1]} />
        <img src={data.teamHeroImages[2]} />
      </div>
      <div className="flex flex-col gap-2">
        <img src={data.teamHeroImages[3]} />
        <img src={data.teamHeroImages[4]} />
      </div>
    </div>
  );
};
export default TeamHeroImages;
