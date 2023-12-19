import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AboutTeam = () => {
  return (
    <div className="w-[73%] m-auto flex flex-col items-center py-28">
      <div className="w-1/2 flex flex-col">
        <h1 className="text-[40px] font-bold tracking-wider">Meet Our Team</h1>
        <p className="text-sm tracking-wider">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-row pt-28 gap-x-8">
        {data.aboutTeam.map((user, i) => {
          return (
            <div key={i} className="flex flex-col items-center">
              <img src={user} alt="users" />
              <div className="p-8">
                <p className="font-bold tracking-wide">Username</p>
                <p className="text-[#737373] text-sm tracking-wider">
                  Profession
                </p>
                <div className="flex- flex-row gap-x-2 justify-start">
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-[#23A6F0] p-[5px]"
                    />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-[#23A6F0] p-[5px]"
                    />
                  </a>
                  <a href="https://www.twitter.com/">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-[#23A6F0] p-[5px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AboutTeam;
