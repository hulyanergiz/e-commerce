import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamTop = () => {
  return (
    <div className="w-[55%] m-auto flex flex-col items-center gap-4 py-[50px]">
      <h3 className="font-bold tracking-wide">WHAT WE DO</h3>
      <h1 className="text-6xl font-bold tracking-wider">
        Innovation tailored for you
      </h1>
      <div className="flex flex-row gap-x-4">
        <p>Home</p>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[#BDBDBD] pt-1"
        />
        <p className="text-[#737373]">Team</p>
      </div>
    </div>
  );
};
export default TeamTop;
