import { useDispatch } from "react-redux";
import { NavLink } from "reactstrap";
import { addToCart } from "../../store/actions/shoppingCartActions";

const ProductCard = (props) => {
  const {
    id,
    name,
    description,
    price,
    stock,
    store_id,
    category_id,
    rating,
    sell_count,
    images,
  } = props.data;
  return (
    <div className="w-full h-92 flex flex-col justify-between items-center py-6 shadow-md hover:shadow-2xl">
      <NavLink href={`/shop/${category_id}/${id}/${name}`}>
        <div className="flex flex-col justify-between items-center h-76">
          <img src={images[0].url} alt="product" className="max-sm:w-[73%]" />
          <div className="flex flex-col items-center justify-start pt-6 px-6 pb-9 w-[73%] h-60">
            <p className="text-[#252B42] text-base font-bold">{name}</p>
            <p className="text-[#737373] text-sm font-bold ">{description}</p>
            <p className="text-[#BDBDBD] text-base font-bold">
              {price}{" "}
              <span className="text-[#23856D] text-base font-bold">
                {rating}
              </span>
            </p>
          </div>
        </div>
      </NavLink>
      <div>
        <button className="text-white font-bold tracking-wider bg-[#23A6F0] py-3 px-1 rounded-[5px] w-36">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
