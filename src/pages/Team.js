import TeamHeroImages from "../components/team/TeamHeroImages";
import TeamTop from "../components/team/TeamTop";
import TeamTrial from "../components/team/TeamTrial";
import TeamUsers from "../components/team/TeamUsers";

const Team = () => {
  return (
    <div className="flex flex-col">
      <TeamTop />
      <TeamHeroImages />
      <TeamUsers />
      <TeamTrial />
    </div>
  );
};
export default Team;
