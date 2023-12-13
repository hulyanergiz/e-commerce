import { data } from "../../data";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="flex flex-row w-[73%] m-auto  gap-x-3.5">
      {data.shop.categoryCards.map((item, i) => {
        return <CategoryCard data={item} key={i} />;
      })}
    </div>
  );
};
export default Categories;
