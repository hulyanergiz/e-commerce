import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamTrial = () => {
  return (
    <div className="flex flex-col md:w-[40%] max-md:w-4/5 m-auto gap-8">
      <h1 className="text-[40px] font-bold tracking-wider">
        Start your 14 days free trial
      </h1>
      <p className="md:w-[70%] max-md:w-5/6 m-auto text-sm text-[#737373] tracking-wider">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button
        type="submit"
        className="bg-[#23A6F0] text-white rounded-[5px] w-[186px] py-3 m-auto"
      >
        Try it free now
      </button>
      <div className="flex- flex-row justify-start">
        <a href="https://www.twitter.com/">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2xl"
            className="team-trial-icons"
          />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xl"
            className="team-trial-icons"
          />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="team-trial-icons"
          />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="team-trial-icons"
          />
        </a>
      </div>
    </div>
  );
};
export default TeamTrial;
