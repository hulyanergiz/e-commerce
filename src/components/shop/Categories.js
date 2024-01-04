import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = useSelector((store) => store.global.categories);
  return (
    <div className="flex lg:flex-row w-[73%] m-auto  gap-x-3.5 pb-12 max-lg:flex-col max-lg:gap-y-2 md:max-lg:w-[50%]">
      {data.shop.categoryCards.map((item, i) => {
        return <CategoryCard data={item} key={i} />;
      })}
    </div>
  );
};
export default Categories;
