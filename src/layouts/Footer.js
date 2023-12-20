import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, InputGroup } from "reactstrap";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <div className="w-[73%] flex sm:flex-row justify-between m-auto max-sm:flex-col max-sm:items-start">
          <h1 className="text-2xl font-bold tracking-wide py-10">Bandage</h1>
          <div className="flex- flex-row gap-x-2 justify-start">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#23A6F0] pt-1  p-[5px]"
              />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#23A6F0] pt-1 p-[5px]"
              />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[#23A6F0] pt-6 p-[5px]"
              />
            </a>
          </div>
        </div>
        <hr className="w-[73%] m-auto font-bold text-[#BDBDBD] pb-2"></hr>
        <div className="w-[73%] flex lg:flex-row md:flex-wrap py-10 g-8 justify-between m-auto max-md:flex-col max-md:items-start max-md:gap-y-8">
          <div className="footer-column">
            <h3 className="footer-heading">Company Info</h3>
            <p className="footer-paragraph">About Us</p>
            <p className="footer-paragraph">Carrier</p>
            <p className="footer-paragraph">We are hiring</p>
            <p className="footer-paragraph">Blog</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <div className="footer-paragraph-column">
              <p className="footer-paragraph">About Us</p>
              <p className="footer-paragraph">Carrier</p>
              <p className="footer-paragraph">We are hiring</p>
              <p className="footer-paragraph">Blog</p>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Features</h3>
            <div className="footer-paragraph-column">
              <p className="footer-paragraph">Business Marketing</p>
              <p className="footer-paragraph">User Analytic</p>
              <p className="footer-paragraph">Live Chat</p>
              <p className="footer-paragraph">Unlimited Support</p>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <div className="footer-paragraph-column">
              <p className="footer-paragraph">IOS & Android</p>
              <p className="footer-paragraph">Watch a Demo</p>
              <p className="footer-paragraph">Customers</p>
              <p className="footer-paragraph">API</p>
            </div>
          </div>
          <div className="footer-column ">
            <h3 className="footer-heading">Get In Touch</h3>
            <div className="footer-paragraph-column">
              <InputGroup size="lg">
                <Input placeholder="Your Email" />
                <Button style={{ backgroundColor: "#23A6F0" }}>
                  Subscribe
                </Button>
              </InputGroup>
              <p className="footer-paragraph font-normal pt-2">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA]">
        <div className="sm:w-[73%] m-auto max-sm:w-[47%]">
          <p className=" footer-bottom sm:text-start max-sm:text-center font-bold py-6">
            Made With Love By Finland All Rigth Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
