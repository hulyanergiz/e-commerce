import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Product = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] flex flex-col">
        <div className="flex flex-row gap-x-4">
          <p>Home</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-[#BDBDBD] pt-1"
          />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>
    </>
  );
};
export default Product;
