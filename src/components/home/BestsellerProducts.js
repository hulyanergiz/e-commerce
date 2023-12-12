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
        <div className="w-full flex flex-row justify-between pb-20">
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[0].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[0].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[0].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[0].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[0].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[0].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[0].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[0].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[0].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[1].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[1].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[1].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[1].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[1].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[1].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[1].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[1].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[1].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[2].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[2].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[2].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[2].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[2].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[2].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[2].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[2].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[2].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[3].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[3].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[3].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[3].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[3].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[3].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[3].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[3].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[3].colors[3]}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row  justify-between pb-20">
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[4].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[4].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[4].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[4].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[4].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[4].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[4].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[4].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[4].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[5].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[5].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[5].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[5].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[5].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[5].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[5].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[5].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[5].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[6].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[6].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[6].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[6].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[6].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[6].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[6].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[6].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[6].colors[3]}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              src={data.bestsellerProducts.card[7].image}
              alt="bestseller product"
            />
            <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
              <p className="text-[#252B42] text-base font-bold">
                {data.bestsellerProducts.card[7].name}
              </p>
              <p className="text-[#737373] text-sm font-bold ">
                {data.bestsellerProducts.card[7].description}
              </p>
              <p className="text-[#BDBDBD] text-base font-bold">
                {data.bestsellerProducts.card[7].price}{" "}
                <span className="text-[#23856D] text-base font-bold">
                  {data.bestsellerProducts.card[7].discounted}
                </span>
              </p>
              <div className="flex flex-row gap-x-1.5">
                <div
                  className={data.bestsellerProducts.card[7].colors[0]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[7].colors[1]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[7].colors[2]}
                ></div>
                <div
                  className={data.bestsellerProducts.card[7].colors[3]}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestsellerProducts;
