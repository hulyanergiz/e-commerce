const CategoryCard = (props) => {
  const { title, img } = props.data;
  return (
    <div className="w-full flex justify-center items-center">
      <img src={img} alt="cloths" className="flex relative w-full h-full" />
      <div className="flex flex-col absolute tracking-wide">
        <p className="text-base text-white font-bold -mb-2">{title}</p>
        <p className="text-sm text-white">5 Items</p>
      </div>
    </div>
  );
};
export default CategoryCard;
