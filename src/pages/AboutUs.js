import AboutProblemsText from "../components/about/AboutProblemsText";
import AboutTeam from "../components/about/AboutTeam";
import AboutTop from "../components/about/AboutTop";
import AboutTotals from "../components/about/AboutTotals";
import AboutVideo from "../components/about/AboutVideo";

const AboutUs = () => {
  return (
    <div className="w-full flex">
      <div className="w-[73%] flex flex-col m-auto">
        <AboutTop />
        <AboutProblemsText />
        <AboutTotals />
        <AboutVideo />
        <AboutTeam />
      </div>
    </div>
  );
};
export default AboutUs;
