import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data";

const ContactTop = () => {
  return (
    <div className="w-[73%] m-auto flex flex-row justify-between">
      <div className="w-[35%] flex flex-col items-start py-40  gap-9">
        <h3 className="text-base font-bold tracking-wide">CONTACT US</h3>
        <h1 className="text-6xl font-bold tracking-wider text-start">
          Get in touch today!
        </h1>
        <p className="text-xl text-[#737373] tracking-wider text-start">
          We know how large objects will act, but things on a small scale
        </p>
        <p className="text-2xl font-bold tracking-wide">Phone : +451 215 215</p>
        <p className="text-2xl font-bold tracking-wide">Fax : +451 215 215</p>
        <div className="flex- flex-row justify-start">
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              className="text-[#252B42] px-[17px]"
            />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              className="text-[#252B42] px-[17px]"
            />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-[#252B42] px-[17px]"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              className="text-[#252B42] px-[17px]"
            />
          </a>
        </div>
      </div>
      <div className="w-1/2 flex">
        <img
          src={data.about[0]}
          alt="about"
          className=" flex relative object-scale-down"
        />
        <img
          src={data.contactTop[0]}
          alt="about"
          className=" flex absolute ml-[7%] object-scale-down "
        />
        <img
          src={data.about[2]}
          alt="about"
          className=" flex absolute  translate-y-12 translate-x-12"
        />
        <img
          src={data.about[3]}
          alt="about"
          className=" flex absolute translate-y-72 translate-x-96 ml-60"
        />
        <img
          src={data.about[4]}
          alt="about"
          className="flex absolute translate-y-96 mt-20"
        />
        <img
          src={data.about[5]}
          alt="about"
          className="flex absolute  translate-y-20 translate-x-96 ml-[10%]"
        />
      </div>
    </div>
  );
};
export default ContactTop;
