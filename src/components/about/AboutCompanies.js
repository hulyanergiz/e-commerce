import BrandsInShop from "../shop/BrandsInShop";

const AboutCompanies = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-20">
      <div className="w-[73%] m-auto">
        <div className="w-[50%] m-auto flex flex-col gap-8 pb-6">
          <h1 className="text-[40px] font-bold tracking-wider">
            Big Companies Are Here
          </h1>
          <p className="text-sm tracking-wider">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <BrandsInShop />
      </div>
    </div>
  );
};
export default AboutCompanies;
