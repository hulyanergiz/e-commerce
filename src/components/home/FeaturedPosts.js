import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";

const FeaturedPosts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[73%] flex  flex-col items-center justify-center pt-32 pb-12 ">
        <div className="w-[58%] flex justify-center flex-col gap-2  align-center pb-8 max-md:w-full">
          <h2 className="text-sm font-bold text-[#23A6F0]">
            {data.featuredPosts.title}
          </h2>
          <h1 className="text-[40px] font-bold  text-[#252B42] tracking-wide">
            {data.featuredPosts.heading}
          </h1>
          <p className="text-sm text-[#737373]">
            {data.featuredPosts.paragraph}
          </p>
        </div>
      </div>
      <div className="w-[73%] flex flex-row flex-wrap justify-between gap-x-2.5 pb-28 ">
        {data.featuredPosts.card.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[31%] max-xl:w-full flex xl:flex-col max-xl:flex-row max-[950px]:flex-col shadow-[0_2px_4px_0_rgba(0,0,0,0.10)]"
            >
              <img
                src={item.image}
                alt="featured post"
                className="flex relative"
              />
              <p className="flex absolute bg-[#E74040] text-white text-sm px-[10px] py-[5px] rounded-[3px] font-bold mt-[1%] ml-[1%]">
                NEW
              </p>
              <div className="flex flex-col pt-6 px-8 pb-9  tracking-wider">
                <div className="flex flex-row gap-x-4 text-xs text-[#737373]">
                  {item.links.map((link, idx) => {
                    return <p key={idx}>{link}</p>;
                  })}
                </div>
                <h2 className="text-xl text-[#252B42] text-start  w-[83%]">
                  {item.name}
                </h2>
                <p className="text-sm text-[#737373] text-start  w-[83%]">
                  {item.description}
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-[#23A6F0] pr-2"
                    />
                    <p className="text-xs">{item.date}</p>
                  </div>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-[#23856D] pr-2"
                    />
                    <p className="text-xs">{item.comments}</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className="text-start text-sm font-bold text-[#737373]">
                    {item.learnMore}
                  </p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#23A6F0] pt-1 pl-2"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedPosts;
