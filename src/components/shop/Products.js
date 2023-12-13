import { data } from "../../data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="flex flex-row justify-between flex-wrap w-[73%] m-auto gap-x-5 py-6">
      {data.shop.productCards.map((item, i) => {
        return (
          <div className="w-[23%] flex m-auto">
            <ProductCard data={item} key={i} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
