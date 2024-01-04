import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "../components/shop/Categories";
import Products from "../components/shop/Products";
import {
  faChevronRight,
  faGrip,
  faListCheck,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import ShopPagination from "../components/shop/ShopPagination";
import BrandsInShop from "../components/shop/BrandsInShop";
import { useSelector } from "react-redux";

const Shop = () => {
  const categories = useSelector((store) => store.global.categories);
  return (
    <div>
      <div className="w-full bg-[#FAFAFA]">
        <div className="flex sm:flex-row justify-between w-[73%] m-auto py-6 max-sm:flex-col max-sm:items-center md:max-lg:w-[50%]">
          <h1 className="text-2xl text-[252B42] font-bold tracking-wide ">
            Shop
          </h1>
          <div className="flex flex-row gap-x-4">
            <p>Home</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[#BDBDBD] pt-1"
            />
            <p className="text-[#BDBDBD]">Shop</p>
          </div>
        </div>
        <Categories />
      </div>
      <div className="flex lg:flex-row max-lg:flex-col justify-between w-[73%] py-6 m-auto items-center max-lg:gap-y-2">
        <p className="text-sm text-[#737373] font-bold pt-3">
          Showing all 12 results
        </p>
        <div className="flex flex-row gap-4">
          <p className="flex self-center pt-3 text-sm font-bold text-[#737373]">
            Views:
          </p>
          <FontAwesomeIcon
            icon={faGrip}
            className="text-2xl text-[#252B42] p-3 border-solid border-[#ECECEC] rounded-[5px]"
          />
          <FontAwesomeIcon
            icon={faListCheck}
            className="text-2xl text-[#252B42] p-3 border-solid border-[#ECECEC] rounded-[5px]"
          />
        </div>
        <div className="flex flex-row gap-x-4 justify-between">
          <button className="text-[#737373] tracking-wider bg-[#F9F9F9] py-3 px-3 border-solid border-[#DDD] rounded-[5px] w-[141px]">
            Popularity
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
          <button className="text-white font-bold tracking-wider bg-[#23A6F0] py-3 px-3 rounded-[5px] w-[94px]">
            Filter
          </button>
        </div>
      </div>
      <Products />
      <ShopPagination />
      <BrandsInShop />
    </div>
  );
};
export default Shop;
