const ProductCard = (props) => {
  const { image, name, description, price, discounted, colors } = props.data;
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="bestseller product" />
      <div className="w-full flex flex-col items-center pt-6 px-6 pb-9">
        <p className="text-[#252B42] text-base font-bold">{name}</p>
        <p className="text-[#737373] text-sm font-bold ">{description}</p>
        <p className="text-[#BDBDBD] text-base font-bold">
          {price}{" "}
          <span className="text-[#23856D] text-base font-bold">
            {discounted}
          </span>
        </p>
        <div className="flex flex-row gap-x-1.5">
          <div className={colors[0]}></div>
          <div className={colors[1]}></div>
          <div className={colors[2]}></div>
          <div className={colors[3]}></div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;