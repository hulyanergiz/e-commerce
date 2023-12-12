import { data } from "../../data";

const BestsellerProducts = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[73%] flex flex-col items-center">
        <div className="w-[58%] flex justify-center flex-col gap-2  align-center py-20">
          <h2 className="text-xl text-[#737373]">
            {data.bestsellerProducts.title}
          </h2>
          <h1 className="text-2xl font-bold  text-[#252B42] tracking-wide">
            {data.bestsellerProducts.heading}
          </h1>
          <p className="text-sm text-[#737373]">
            {data.bestsellerProducts.paragraph}
          </p>
        </div>
        <div className="w-full flex flex-row justify-between ">
          <div className="flex flex-row flex-wrap justify-between ">
            {data.bestsellerProducts.card.map((item, index) => {
              return (
                <div key={index} className=" w-[23%] pb-20">
                  <img
                    src={item.image}
                    alt="bestseller product"
                    className="w-full"
                  />
                  <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
                    <p className="text-[#252B42] text-base font-bold">
                      {item.name}
                    </p>
                    <p className="text-[#737373] text-sm font-bold ">
                      {item.description}
                    </p>
                    <p className="text-[#BDBDBD] text-base font-bold">
                      {item.price}{" "}
                      <span className="text-[#23856D] text-base font-bold">
                        {item.discounted}
                      </span>
                    </p>
                    <div className="flex flex-row gap-x-1.5">
                      <div className={item.colors[0]}></div>
                      <div className={item.colors[1]}></div>
                      <div className={item.colors[2]}></div>
                      <div className={item.colors[3]}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestsellerProducts;
