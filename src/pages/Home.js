import BestsellerProducts from "../components/home/BestsellerProducts";
import EditorsPick from "../components/home/EditorsPick";
import FeaturedPosts from "../components/home/FeaturedPosts";
import HomeBottomCarousel from "../components/home/HomeBottomCarousel";
import HomeCarousel from "../components/home/HomeCarousel";
import NeuralUniverse from "../components/home/NeuralUniverse";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <EditorsPick />
      <BestsellerProducts />
      <HomeBottomCarousel />
      <NeuralUniverse />
      <FeaturedPosts />
    </div>
  );
};
export default Home;
