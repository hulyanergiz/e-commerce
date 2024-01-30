import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCarousel from "../components/product/productCarousel";
import ProductNavigation from "../components/product/productNavigation";
import ProductDetails from "../components/product/ProductDetails";
import ProductBestsellers from "../components/product/productBestsellers";
import BrandsInShop from "../components/shop/BrandsInShop";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../store/actions/productActions";
import { useEffect } from "react";
const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productList, totalProductCount } = useSelector(
    (store) => store.product
  );
  useEffect(() => {
    dispatch(setProductList(null, null, null, totalProductCount - 24, 0));
  }, []);
  const product = productList?.filter((item) => item.id == params.productId);

  return (
    <>
      <div className="bg-[#FAFAFA] flex flex-col">
        <div className="w-[73%] flex m-auto py-6">
          <div className="flex flex-row gap-x-4  justify-start">
            <p>Home</p>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[#BDBDBD] pt-1"
            />
            <p className="text-[#BDBDBD]">Shop</p>
          </div>
        </div>
        <ProductCarousel product={product} />
      </div>
      <ProductNavigation />
      <hr className="w-[73%] m-auto font-bold text-[#BDBDBD] pb-4"></hr>
      <ProductDetails />
      <div className="bg-[#FAFAFA]">
        <ProductBestsellers />
        <BrandsInShop />
      </div>
    </>
  );
};
export default Product;
