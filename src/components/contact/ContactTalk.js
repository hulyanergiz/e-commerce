import { data } from "../../data";

const ContactTalk = () => {
  return (
    <div className="w-[20%] m-auto flex flex-col items-center gap-4 pb-20">
      <img src={data.contactArrow} alt="arrow" />
      <h3 className="text-base font-bold tracking-wide">
        WE Can't WAIT TO MEET YOU
      </h3>
      <h1 className="text-6xl font-bold tracking-wider">Let’s Talk</h1>
      <button className="text-white text-sm tracking-wider bg-[#23A6F0] py-3 w-[186px] rounded-[5px]">
        Try it free now
      </button>
    </div>
  );
};
export default ContactTalk;
