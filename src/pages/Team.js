import TeamHeroImages from "../components/team/TeamHeroImages";
import TeamTop from "../components/team/TeamTop";
import TeamUsers from "../components/team/TeamUsers";

const Team = () => {
  return (
    <div className="flex flex-col">
      <TeamTop />
      <TeamHeroImages />
      <TeamUsers />
    </div>
  );
};
export default Team;
