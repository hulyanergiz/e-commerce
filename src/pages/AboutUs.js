import AboutCompanies from "../components/about/AboutCompanies";
import AboutProblemsText from "../components/about/AboutProblemsText";
import AboutTeam from "../components/about/AboutTeam";
import AboutTop from "../components/about/AboutTop";
import AboutTotals from "../components/about/AboutTotals";
import AboutVideo from "../components/about/AboutVideo";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      <AboutTop />
      <AboutProblemsText />
      <AboutTotals />
      <AboutVideo />
      <AboutTeam />
      <AboutCompanies />
    </div>
  );
};
export default AboutUs;
