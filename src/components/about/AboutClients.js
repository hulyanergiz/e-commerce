import { data } from "../../data";

const AboutClients = () => {
  return (
    <div className="w-full flex flex-row bg-[#2A7CC7] justify-between ">
      <div className=" flex w-[59%] py-50">
        <div className="w-[52%] m-auto flex flex-col justify-center text-white gap-6">
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
      <img src={data.aboutClients} alt="client" className="w-[41%]" />
    </div>
  );
};
export default AboutClients;
