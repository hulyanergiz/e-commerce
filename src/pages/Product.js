import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductNavigation from "../components/product/productNavigation";
import ProductDetails from "../components/product/ProductDetails";
import ProductBestsellers from "../components/product/productBestsellers";
import BrandsInShop from "../components/shop/BrandsInShop";
const Product = () => {
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
      </div>
      <ProductNavigation />
      <ProductDetails />
      <ProductBestsellers />
      <BrandsInShop />
    </>
  );
};
export default Product;
