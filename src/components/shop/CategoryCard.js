const CategoryCard = (props) => {
  const { image, title, amount } = props.data;
  return (
    <div className="w-full flex justify-center items-center">
      <img src={image} alt="cloths" className="flex relative" />
      <div className="flex flex-col absolute tracking-wide">
        <p className="text-base text-white font-bold -mb-2">{title}</p>
        <p className="text-sm text-white">{amount} Items</p>
      </div>
    </div>
  );
};
export default CategoryCard;
