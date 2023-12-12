import BestsellerProducts from "../components/home/BestsellerProducts";
import EditorsPick from "../components/home/EditorsPick";
import HomeCarousel from "../components/home/HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <EditorsPick />
      <BestsellerProducts />
    </div>
  );
};
export default Home;
