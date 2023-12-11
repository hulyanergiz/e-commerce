import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faChevronDown,
  faUser,
  faSearch,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full h-[136px] flex flex-col">
      <div className="w-full h-[58px] bg-[#252B42]">
        <div className=" h-[46px] pt-[9px] pb-[3px] flex flex-row justify-between items-start shrink-0 text-sm w-[97%] m-auto">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row p-[10px]">
              <FontAwesomeIcon icon={faPhone} className="text-white pt-1" />

              <div className="text-white">(225) 555-0118</div>
            </div>
            <div className="flex flex-row py-[10px]">
              <FontAwesomeIcon icon={faEnvelope} className="text-white pt-1" />
              <div className="text-white">michelle.rivera@example.com</div>
            </div>
          </div>
          <div className="text-white py-[10px]">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex flex-row py-[10px] p-[10px]">
            <div className="text-white pr-[10px]">Follow Us:</div>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white pt-1 p-[5px]"
              />
            </a>
            <a href="https://www.youtube.com/">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white pt-1  p-[5px]"
              />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white pt-1  p-[5px]"
              />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white pt-1 p-[5px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-[78px] py-3 pb-2 pl-9 pr-4 justify-between">
        <h3 className="w-[10%] text-2xl text-[#252B42] font-bold py-4 pl-1 pr-3">
          Bandage
        </h3>
        <div className="w-[90%] flex justify-between">
          <div className="flex flex-row justify-between text-[#737373] pl-[3%]">
            <div className="p-4">
              <NavLink to="/home">Home</NavLink>
            </div>
            <div className="p-4">
              <NavLink to="/shop">Shop</NavLink>
              <FontAwesomeIcon icon={faChevronDown} className="pl-3" />
            </div>
            <div className="p-4">
              <NavLink to="#">About</NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">Blog</NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">Contact</NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">Pages</NavLink>
            </div>
          </div>
          <div className="flex flex-row text-[#23A6F0]">
            <div className="p-4">
              <FontAwesomeIcon icon={faUser} />
              <NavLink to="#">Login / Register</NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </div>
            <div className="p-4">
              <NavLink to="#">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
