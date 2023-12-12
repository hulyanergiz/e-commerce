import BestsellerProducts from "../components/home/BestsellerProducts";
import EditorsPick from "../components/home/EditorsPick";
import HomeBottomCarousel from "../components/home/HomeBottomCarousel";
import HomeCarousel from "../components/home/HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <EditorsPick />
      <BestsellerProducts />
      <HomeBottomCarousel />
    </div>
  );
};
export default Home;
