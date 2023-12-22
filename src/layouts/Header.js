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
import { NavLink } from "reactstrap";
const Header = () => {
  return (
    <div className="w-full flex flex-col max-sm:bg-[#F6F6F6]">
      <div className="w-full bg-[#252B42] hidden sm:block">
        <div className="pt-[9px] pb-[3px] flex justify-between items-start shrink-0 text-sm w-[97%] m-auto lg:flex-row max-lg:flex-col max-lg:items-center">
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
          <div className="text-white py-[10px] pl-3">
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
      <div className="flex md:flex-row w-full py-3 pb-2 pl-9 pr-4 justify-between gap-6 max-[500px]:flex-col max-[500px]:w-[80%] max-[500px]:justify-start">
        <h3 className="w-[20%] text-2xl text-[#252B42] font-bold py-4 pl-1 pr-3">
          Bandage
        </h3>
        <div className="flex lg:flex-row lg:justify-between w-[80%] max-lg:flex-col max-lg:items-center ">
          <div className=" flex justify-between text-[#737373]  no-underline gap-3 sm:flex-row max-sm:flex-col lg:w-[30%] max-lg:w-[85%] max-lg:justify-start max-sm:items-start text-sm max-sm:text-[30px] sm:font-bold">
            <div className="py-4">
              <NavLink href="/" className="header-navlink-left">
                Home
              </NavLink>
            </div>
            <div className="py-4 flex flex-row justify-center">
              <NavLink href="/shop" className="header-navlink-left">
                Shop
              </NavLink>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="pl-3 text-[#737373] max-sm:text-xl"
              />
            </div>
            <div className="py-4">
              <NavLink href="/about" className="header-navlink-left">
                About
              </NavLink>
            </div>
            <div className="py-4">
              <NavLink href="#" className="header-navlink-left">
                Blog
              </NavLink>
            </div>
            <div className="py-4">
              <NavLink href="/contact" className="header-navlink-left">
                Contact
              </NavLink>
            </div>
            <div className="py-4">
              <NavLink href="#" className="header-navlink-left">
                Pages
              </NavLink>
            </div>
          </div>
          <div className="max-sm:order-first sm:order-last flex gap-4  text-[#23A6F0] flex-row lg:justify-between max-lg:justify-start lg:w-[35%] max-lg:w-[85%] max-sm:text-[#737373] text-sm max-sm:text-[30px]">
            <div className="py-4 flex flex-row  justify-center max-sm:w-1/2 max-sm:justify-end gap-3">
              <NavLink href="/sign" className="header-navlink-right">
                <FontAwesomeIcon
                  icon={faUser}
                  className="header-navlink-right pt-1 max-sm:text-[#737373] "
                />
              </NavLink>
              <div className="hidden sm:flex sm:flex-row pl-2 gap-2">
                <NavLink href="singin">Login</NavLink>
                <span>/</span> <NavLink href="/signup">Register</NavLink>
              </div>
            </div>
            <div className="py-4">
              <NavLink href="#" className="header-navlink-right">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </div>
            <div className="py-4">
              <NavLink href="#" className="header-navlink-right">
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </div>
            <div className="py-4">
              <NavLink href="#" className="header-navlink-right">
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
