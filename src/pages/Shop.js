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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  defaultProductList,
  setProductList,
} from "../store/actions/productActions";
import { PulseLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.global.categories);
  const { fetchState, productList, totalProductCount } = useSelector(
    (store) => store.product
  );

  console.log("productList!!", productList);

  const queryParams = new URLSearchParams(window.location.search);
  const { category } = useParams();
  const urlFilter = queryParams.get("filter") || "";
  const urlSort = queryParams.get("sort") || "";
  const [sort, setSort] = useState(urlSort);
  const [filter, setFilter] = useState(urlFilter);
  const [limit, setLimit] = useState(24);
  const [offset, setOffset] = useState(0);
  const lastOffset = offset + limit;
  const moreProducts = () => {
    setOffset(lastOffset);
    dispatch(setProductList(category, filter, sort, limit, lastOffset));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(defaultProductList());
    if (filter) {
      queryParams.set("filter", filter);
    }
    if (sort) {
      queryParams.set("sort", sort);
    }

    dispatch(setProductList(category, filter, sort, limit, 0));
    const queryParamsStr = queryParams.toString();
    const urlToGo = `?${queryParamsStr ? `${queryParamsStr}` : ""}`;
    window.history.pushState(productList, "", urlToGo);
  };

  useEffect(() => {
    dispatch(setProductList(category, urlFilter, urlSort, limit, lastOffset));
  }, [category]);

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
          Showing all {productList?.length} results
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
          <form onSubmit={submitHandler}>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-[#737373] tracking-wider bg-[#F9F9F9] py-3 px-3 border-solid border-[#DDD] rounded-[5px] w-[230px]"
            >
              <option value="">
                Order By
                <FontAwesomeIcon icon={faChevronDown} className="pr-2" />
              </option>
              <option value="rating:asc">Popularity: low to high</option>
              <option value="rating:desc">Popularity: high to low</option>
              <option value="price:asc">Price: low to high</option>
              <option value="price:desc">Price: high to low</option>
            </select>
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Type to search"
              className="py-3 px-3 border-solid  border-[#737373] rounded-[5px] w-[230px]"
            />
            <button
              type="submit"
              className="text-white font-bold tracking-wider bg-[#23A6F0] py-3 px-3 rounded-[5px] w-[94px]"
            >
              Filter
            </button>
          </form>
        </div>
      </div>

      {fetchState === "fetching" && <PulseLoader />}

      {fetchState === "fetched" && (
        <InfiniteScroll
          dataLength={productList.length}
          next={moreProducts}
          hasMore={totalProductCount > productList.length}
          height={2000}
        >
          {" "}
          <Products />
        </InfiniteScroll>
      )}
      <BrandsInShop />
    </div>
  );
};
export default Shop;
