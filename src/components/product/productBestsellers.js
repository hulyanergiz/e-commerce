import { data } from "../../data";

const ProductBestsellers = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center py-12">
      <div className="w-[73%] flex flex-col">
        <h3 className="text-2xl font-bold tracking-wide flex justify-start">
          BESTSELLER PRODUCTS
        </h3>
        <div className="flex flex-row flex-wrap justify-between gap-y-8">
          {data.productBestseller.map((item, i) => {
            return (
              <div className=" flex flex-col" key={i}>
                <img src={item} alt="bestseller" />
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductBestsellers;
