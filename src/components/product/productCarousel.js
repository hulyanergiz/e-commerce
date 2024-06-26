import { Carousel } from "react-responsive-carousel";
import { data } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/shoppingCartActions";

const ProductCarousel = (props) => {
  const product = props;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center">
      <div className="w-[73%] flex flex-row items-stretch gap-x-8">
        <div className="flex w-[50%] ">
          <Carousel
            showStatus={false}
            showArrows={true}
            showIndicators={false}
            showThumbs={true}
            infiniteLoop={true}
            swipeable={true}
          >
            {product?.product[0]?.images?.map((slide, i) => {
              return (
                <img
                  src={slide.url}
                  key={i}
                  alt="collection"
                  className=" object-cover"
                />
              );
            })}
          </Carousel>
        </div>
        <div className="flex flex-col text-start tracking-wide w-1/2 gap-y-2">
          <h2 className="text-xl tracking-wider pt-2">
            {product?.product[0]?.name}
          </h2>
          <div className="flex flex-row gap-x-[5px]">
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#F3CD03]"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#F3CD03]"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#F3CD03]"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#F3CD03]"
              size="lg"
            />
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className="text-[#F3CD03]"
              size="lg"
            />
            <p className="text-[#737373] text-sm font-bold tracking-wider pl-1">
              10 Reviews
            </p>
          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            ${product?.product[0]?.price}
          </h1>
          <p className="text-sm font-bold tracking-wider">
            Availability : <span className="text-[#23A6F0]">In Stock </span>
          </p>
          <p className="text-[#858585] text-sm tracking-wider">
            {product?.product[0]?.description}
          </p>
          <hr />
          <div className="flex flex-row gap-x-1.5">
            <div className="w-6 h-6 rounded-full bg-[#23A6F0]"></div>
            <div className="w-6 h-6 rounded-full bg-[#2DC071]"></div>
            <div className="w-6 h-6 rounded-full bg-[#E77C40]"></div>
            <div className="w-6 h-6 rounded-full bg-[#252B42]"></div>
          </div>
          <div>
            {quantity > 0 && (
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
            )}
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <div className="flex flex-row items-center gap-x-3 pt-10">
            <button
              onClick={() => dispatch(addToCart(product.product.id))}
              className=" w-[160px] text-center py-[10px] text-sm text-white font-bold  tracking-wider bg-[#23A6F0] rounded-md"
            >
              Add to Cart
            </button>
            <FontAwesomeIcon
              icon={faHeart}
              className="border-solid border-[#E8E8E8] rounded-full p-[10px]"
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="border-solid border-[#E8E8E8] rounded-full p-[10px]"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="border-solid border-[#E8E8E8] rounded-full p-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCarousel;
