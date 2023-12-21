import { data } from "../../data";

const BrandsInShop = () => {
  return (
    <div className="w-ful bg-[#FAFAFA]">
      <div className="flex lg:flex-row max-lg:flex-col max-lg:items-center max-lg:gap-y-14 justify-between w-[73%] m-auto py-10">
        {data.brandsInShop.map((item, i) => {
          return <img key={i} src={item} alt="brand" />;
        })}
      </div>
    </div>
  );
};
export default BrandsInShop;
