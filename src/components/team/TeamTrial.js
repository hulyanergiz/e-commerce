import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamTrial = () => {
  return (
    <div className="flex flex-col w-[40%] m-auto gap-8">
      <h1 className="text-[40px] font-bold tracking-wider">
        Start your 14 days free trial
      </h1>
      <p className="w-[70%] m-auto text-sm text-[#737373] tracking-wider">
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
            className="text-[#23A6F0] p-[34px]"
          />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            size="2xl"
            className="text-[#23A6F0] p-[34px]"
          />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2xl"
            className="text-[#23A6F0] p-[34px]"
          />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="text-[#23A6F0] p-[34px]"
          />
        </a>
      </div>
    </div>
  );
};
export default TeamTrial;
