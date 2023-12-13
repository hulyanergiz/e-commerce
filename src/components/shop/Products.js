import { data } from "../../data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="flex flex-row flex-wrap w-[73%] m-auto gap-x-5">
      {data.shop.productCards.map((item, i) => {
        return (
          <div className="w-[23%] flex justify-between m-auto">
            <ProductCard data={item} key={i} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
