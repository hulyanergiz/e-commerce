const CategoryCard = (props) => {
  const { title, img, gender, rating } = props.data;
  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer">
      <img src={img} alt="cloths" className="flex relative w-full h-full" />

      <div className="flex flex-col absolute tracking-wide">
        <p className="text-base text-white font-bold -mb-2">
          {gender === "k" ? "KADIN" : "ERKEK"}
        </p>
        <p className="text-base text-white font-bold -mb-2">{title}</p>
        <p className="text-sm text-white">rating:{rating}</p>
      </div>
    </div>
  );
};
export default CategoryCard;
