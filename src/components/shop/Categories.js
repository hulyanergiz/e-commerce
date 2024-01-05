import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { NavLink } from "reactstrap";

const Categories = () => {
  const categories = useSelector((store) => store.global.categories);
  const sortedCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <div className="flex lg:flex-row w-[73%] m-auto  gap-x-3.5 pb-12 max-lg:flex-col max-lg:gap-y-2 md:max-lg:w-[50%]">
      {sortedCategories.map((item, i) => {
        return (
          <div className="w-[19%]" key={i}>
            <NavLink
              href={`/shopping/:${
                item.gender === "k" ? "kadin" : "erkek"
              }/:${item.code.slice(2)}`}
              className="h-full"
            >
              <CategoryCard data={item} />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
