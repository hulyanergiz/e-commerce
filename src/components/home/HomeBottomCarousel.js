import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../data";

const HomeBottomCarousel = () => {
  return (
    <div className="w-full h-[709px] bg-[#23856D]">
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
            <div className="w-full flex flex-row relative items-center justify-center">
              <div className=" flex flex-col gap-9 my-12 text-white text-start tracking-wide w-[35%] h-[427px] py-12"></div>

              <div className="flex flex-col gap-9 my-12 absolute text-white text-start tracking-wide w-[72%] h-[427px] py-12">
                <h2 className="text-base font-bold w-[80%]">{slide.term}</h2>
                <h1 className="text-6xl  font-bold w-[80%]">{slide.title}</h1>
                <p className="w-[80%] text-xl">{slide.description}</p>
                <div className="flex flex-row items-center">
                  <p className="text-2xl  pt-[11px] pr-8 ">{slide.price}</p>
                  <button className="w-[18%] text-center py-3 text-2xl bg-[#2DC071] rounded-md">
                    {slide.button}
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={slide.image}
                  key={i}
                  alt="collection image"
                  className="w-full object-cover mt-[25.5%]"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeBottomCarousel;
