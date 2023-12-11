const Footer = () => {
  return (
    <div className="w-full h-[414px] flex-flex-col">
      <div className="w-full h-[338px]">
        <div className="w-[73%] flex flex-row py-20 g-8 justify-between m-auto">
          <div className="footer-column">
            <h3 className="footer-heading">Get In Touch</h3>
            <p className="footer-paragraph font-normal">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Company Info</h3>
            <div className="footer-paragraph-column">
              <p className="footer-paragraph footer-bold">About Us</p>
              <p className="footer-paragraph footer-bold">Carrier</p>
              <p className="footer-paragraph footer-bold">We are hiring</p>
              <p className="footer-paragraph footer-bold">Blog</p>
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
        </div>
      </div>
      <div className="w-full h-[74px]">
        <p className=" footer-bottom text-center font-bold">
          Made With Love By Figmaland All Rigth Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
