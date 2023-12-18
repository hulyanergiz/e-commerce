import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  return (
    <div className="w-full flex ">
      <div className="w-[73%] flex flex-row m-auto justify-between gap-x-8">
        <div className="w-[34%]">
          <img
            src={data.productDetail.image}
            alt="product image"
            className="rounded-[5px] w-[316px]"
          />
        </div>

        <div className="flex flex-col items-start text-start gap-y-3 w-[34%] text-sm text-[#737373] tracking-wider">
          <h3 className="text-2xl font-bold tracking-wide text-[#252B42]">
            the quick fox jumps over
          </h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="flex flex-col w-[31%] text-sm  items-start text-start tracking-wide text-[#737373]">
          <div>
            <h3 className="text-2xl font-bold text-[#252B42]">
              the quick fox jumps over{" "}
            </h3>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#252B42]">
              the quick fox jumps over{" "}
            </h3>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] pt-1 pr-4"
              />
              the quick fox jumps over the lazy dog{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
