import { data } from "../../data";

const BrandsInShop = () => {
  return (
    <div className="flex flex-row justify-between w-[73%] m-auto py-10">
      {data.brandsInShop.map((item, i) => {
        return <img key={i} src={item} />;
      })}
    </div>
  );
};
export default BrandsInShop;
