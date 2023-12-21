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
    <div className="w-[73%] m-auto flex lg:flex-row lg:justify-between max-lg:flex-col max-lg:items-center">
      <div className="lg:w-[35%] max-lg:w-[73%] flex flex-col lg:items-start max-lg:items-center py-40  gap-9">
        <h3 className="text-base font-bold tracking-wide">CONTACT US</h3>
        <h1 className="text-6xl font-bold tracking-wider lg:text-start max-lg:text-center">
          Get in touch today!
        </h1>
        <p className="text-xl text-[#737373] tracking-wider lg:text-start max-lg:text-center">
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
      <div className="w-1/2 flex max-lg:m-auto">
        <img
          src={data.about[0]}
          alt="about"
          className=" flex relative object-contain max-lg:-translate-y-32"
        />
        <img
          src={data.contactTop}
          alt="about"
          className=" flex absolute max-lg:max-h-[600px] ml-[7%] object-contain max-lg:w-[50%] max-lg:-translate-y-36 max-lg:-translate-x-20 "
        />
        <img
          src={data.about[2]}
          alt="about"
          className=" flex absolute  translate-y-12 translate-x-12 max-lg:-translate-x-20 max-lg:-translate-y-32"
        />
        <img
          src={data.about[3]}
          alt="about"
          className=" flex absolute object-contain sm:translate-y-72 sm:translate-x-96 sm:ml-60 max-sm:translate-y-4"
        />
        <img
          src={data.about[4]}
          alt="about"
          className="flex absolute object-contain  sm:translate-y-96 sm:mt-20 max-sm:translate-y-8 max-sm:left-28"
        />
        <img
          src={data.about[5]}
          alt="about"
          className="flex absolute object-contain  sm:translate-y-20 sm:translate-x-96 sm:ml-[10%] max-sm:-translate-y-24 max-sm:translate-x-72"
        />
      </div>
    </div>
  );
};
export default ContactTop;
