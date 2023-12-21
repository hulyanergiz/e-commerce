import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div className="w-[68%] m-auto flex flex-col gap-20 py-28 max-lg:bg-[#FAFAFA]">
      <div className="flex flex-col w-[54%] m-auto">
        <h3 className="text-sm font-bold tracking-wider">VISIT OUR OFFICE</h3>
        <h1 className="text-[40px] font-bold tracking-wider">
          We help small businesses with big ideas
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center m-auto max-lg:gap-8">
        <div className="flex flex-col items-center py-20 px-10 bg-white">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-[#23A6F0] pb-3"
            size="4x"
          />
          <p>
            georgia.young@example.com
            <p>georgia.young@ple.com</p>
          </p>
          <p>Get Support</p>
          <button
            className="text-[#23A6F0] border-solid border-1 rounded-[40px] border-[#23A6F0] py-3 w-[189px]"
            type="submit"
          >
            Submit Request
          </button>
        </div>
        <div className="flex flex-col items-center py-20 px-10 bg-[#252B42] text-white">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-[#23A6F0] pb-3"
            size="4x"
          />
          <p>
            georgia.young@example.com
            <p>georgia.young@ple.com</p>
          </p>
          <p>Get Support</p>
          <button
            className="text-[#23A6F0] border-solid border-1 rounded-[40px] border-[#23A6F0] py-3 w-[189px]"
            type="submit"
          >
            Submit Request
          </button>
        </div>
        <div className="flex flex-col items-center py-20 px-10 bg-white">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[#23A6F0] pb-3"
            size="4x"
          />
          <p>
            georgia.young@example.com
            <p>georgia.young@ple.com</p>
          </p>
          <p>Get Support</p>
          <button
            className="text-[#23A6F0] border-solid border-1 rounded-[40px] border-[#23A6F0] py-3 w-[189px]"
            type="submit"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
