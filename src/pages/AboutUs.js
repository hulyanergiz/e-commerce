import AboutProblemsText from "../components/about/AboutProblemsText";
import AboutTop from "../components/about/AboutTop";

const AboutUs = () => {
  return (
    <div className="w-full flex">
      <div className="w-[73%] flex flex-col m-auto">
        <AboutTop />
        <AboutProblemsText />
      </div>
    </div>
  );
};
export default AboutUs;
