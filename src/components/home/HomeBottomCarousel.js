import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../data";

const HomeBottomCarousel = () => {
  return (
    <div className="w-full bg-[#23856D]">
      <Carousel
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
      >
        {data.sliderBottom.map((slide, i) => {
          return (
            <div key={i} className="w-full pt-12">
              <div className=" flex lg:flex-row  max-lg:flex-col lg:gap-12 max-lg:gap-3 text-white tracking-wide w-[73%] m-auto ">
                <div className="flex lg:relative max-lg:block items-center justify-center lg:my-12 max-lg:my-0 text-white sm:text-start max-sm:text-center  tracking-wide lg:w-[45%] max-lg:[73%] sm:h-[410px] max-sm:h-[480px] lg:pt-12 max-lg:pt-12">
                  <div className="flex flex-col absolute xl:gap-9 max-xl:gap-4  max-lg:m-auto">
                    <h2 className="text-base font-bold w-[80%]">
                      {slide.term}
                    </h2>
                    <h1 className="text-6xl  font-bold w-[80%]">
                      {slide.title}
                    </h1>
                    <p className="w-[80%] text-xl">{slide.description}</p>
                    <div className="flex sm:flex-row items-center max-sm:flex-col max-sm:items-center w-[85%]">
                      <p className="text-2xl  pt-[11px] pr-8 ">{slide.price}</p>
                      <button className="w-[181px] text-center py-3 text-2xl bg-[#2DC071] rounded-md">
                        {slide.button}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[45%] max-lg:w-full bottom-0 flex relative">
                  <img
                    src={slide.image}
                    alt="collection image"
                    className="lg:flex lg:absolute max-lg:block w-full lg:h-[90%] max-lg:h-[500px] object-contain bottom-0"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeBottomCarousel;
