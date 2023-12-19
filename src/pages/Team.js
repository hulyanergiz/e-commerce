import TeamHeroImages from "../components/team/TeamHeroImages";
import TeamTop from "../components/team/TeamTop";

const Team = () => {
  return (
    <div className="flex flex-col">
      <TeamTop />
      <TeamHeroImages />
    </div>
  );
};
export default Team;
