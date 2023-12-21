import { data } from "../../data";

const AboutClients = () => {
  return (
    <div className="w-full flex md:flex-row max-md:flex-col max-md:items-center bg-[#2A7CC7] md:justify-between max-md:py-28 max-md:gap-3">
      <div className=" flex md:w-[59%] max-md:w-[73%] py-50">
        <div className="lg:w-[52%] max-lg:w-[90%] m-auto flex flex-col justify-center text-white lg:gap-6 max-lg:gap-2">
          <h3 className="font-bold tracking-wide">WORK WITH US</h3>
          <h1 className="text-[40px] font-bold tracking-wider">
            Now Let's grow Yours
          </h1>
          <p className="text-sm tracking-wider">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <div className="w-full">
            <button
              type="submit"
              className="border-solid border-2 border-white rounded-[5px] w-[130px] py-3 m-auto"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <img
        src={data.aboutClients}
        alt="client"
        className="md:w-[41%] max-md:[73%] hidden sm:block"
      />
    </div>
  );
};
export default AboutClients;
