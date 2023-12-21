import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../data";
const HomeCarousel = () => {
  return (
    <div>
      <div className="w-full ">
        <Carousel
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
        >
          {data.slider.map((slide, i) => {
            return (
              <div className="w-full flex relative items-center justify-center">
                <img
                  src={slide.image}
                  key={i}
                  alt="collection"
                  className="w-full max-lg:h-[714px] object-cover"
                />

                <div className="flex flex-col my-12 absolute text-white sm:text-start max-sm:items-center tracking-wide sm:w-[72%] max-sm:w-[80%] lg:gap-9 max-lg:gap-3 max-md:gap-1 py-12">
                  <h2 className="text-base font-bold w-[58%]">{slide.term}</h2>
                  <h1 className="lg:text-6xl max-lg:text-4xl font-bold sm:w-[58%] max-sm:w-[65%]">
                    {slide.title}
                  </h1>
                  <p className="lg:w-[36%] sm:max-lg:w-[58%] max-sm:w-[65%] text-xl">
                    {slide.description}
                  </p>
                  <button className=" w-[221px] text-center  py-3 text-2xl tracking-wider bg-[#2DC071] rounded-md">
                    {slide.button}
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default HomeCarousel;
