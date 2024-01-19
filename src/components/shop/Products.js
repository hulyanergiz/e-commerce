import { useSelector } from "react-redux";
import { data } from "../../data";
import ProductCard from "./ProductCard";

const Products = () => {
  const productList = useSelector((store) => store.product.productList);

  return (
    <div className="flex sm:flex-row max-sm:flex-col justify-between md:flex-wrap md:w-[73%] mx-auto gap-x-3 py-6">
      {productList?.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-row items-start md:m-auto w-[24%] sm:max-h-[900px] max-sm:w-full"
          >
            <ProductCard data={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
