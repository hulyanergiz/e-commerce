import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AboutVideo = () => {
  return (
    <div className="w-[73%] m-auto flex px-8 py-28">
      <img
        src={data.aboutVideo}
        alt="video"
        className="flex relative w-full rounded-[15px]"
      />
      <FontAwesomeIcon
        icon={faPlay}
        className="absolute text-white p-9 bg-[#23A6F0] rounded-full ml-[34%] mt-[18%] -translate-x-1/2  -translate-y-1/2"
      />
    </div>
  );
};
export default AboutVideo;
