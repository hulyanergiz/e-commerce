import { useSelector } from "react-redux";
import { data } from "../../data";
import ProductCard from "./ProductCard";

const Products = () => {
  const productList = useSelector((store) => store.product.productList);

  return (
    <div className="flex md:flex-row max-md:flex-col justify-between md:flex-wrap md:w-[73%] m-auto gap-x-3 py-6">
      {data.shop.productCards.map((item, i) => {
        return (
          <div className="flex md:m-auto max-sm:w-full">
            <ProductCard data={item} key={i} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
