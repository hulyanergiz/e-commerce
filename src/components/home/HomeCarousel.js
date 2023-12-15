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
                  alt="collection image"
                  className="w-full object-cover"
                />

                <div className="flex flex-col gap-9 my-12 absolute text-white text-start tracking-wide w-[72%] h-[427px] py-12">
                  <h2 className="text-base font-bold w-[58%]">{slide.term}</h2>
                  <h1 className="text-6xl  font-bold w-[58%]">{slide.title}</h1>
                  <p className="w-[36%] text-xl">{slide.description}</p>
                  <button className=" w-[20%] text-center  py-3 text-2xl tracking-wider bg-[#2DC071] rounded-md">
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
