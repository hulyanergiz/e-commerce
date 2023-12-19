import AboutProblemsText from "../components/about/AboutProblemsText";
import AboutTop from "../components/about/AboutTop";
import AboutTotals from "../components/about/AboutTotals";

const AboutUs = () => {
  return (
    <div className="w-full flex">
      <div className="w-[73%] flex flex-col m-auto">
        <AboutTop />
        <AboutProblemsText />
        <AboutTotals />
      </div>
    </div>
  );
};
export default AboutUs;
