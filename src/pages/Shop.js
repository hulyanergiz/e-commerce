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

const Shop = () => {
  return (
    <div>
      <div className="w-full bg-[#FAFAFA]">
        <div className="flex flex-row justify-between w-[73%] m-auto py-6">
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
      <div className="flex flex-row justify-between w-[73%] py-6 m-auto items-center">
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
        <div className="flex flex-row gap-x-4">
          <button className="text-[#737373] tracking-wider bg-[#F9F9F9] py-2 px-6 border-solid border-[#DDD] rounded-[5px]">
            Popularity
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
          <button className="text-white font-bold tracking-wider bg-[#23A6F0] py-2 px-5 rounded-[5px]">
            Filter
          </button>
        </div>
      </div>
      <Products />
      <ShopPagination />
    </div>
  );
};
export default Shop;
