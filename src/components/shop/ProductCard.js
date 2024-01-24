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
    <div className="w-full h-full flex flex-col justify-between items-center py-6">
      <img src={images[0].url} alt="product" className="max-sm:w-[73%]" />
      <div className="flex flex-col items-center justify-start pt-6 px-6 pb-9 w-[73%] h-72">
        <p className="text-[#252B42] text-base font-bold">{name}</p>
        <p className="text-[#737373] text-sm font-bold ">{description}</p>
        <p className="text-[#BDBDBD] text-base font-bold">
          {price}{" "}
          <span className="text-[#23856D] text-base font-bold">{rating}</span>
        </p>
        {/* <div className="flex flex-row gap-x-1.5">
          <div className={colors[0]}></div>
          <div className={colors[1]}></div>
          <div className={colors[2]}></div>
          <div className={colors[3]}></div>
        </div> */}
      </div>
    </div>
  );
};
export default ProductCard;
