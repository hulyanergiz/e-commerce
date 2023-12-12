import { data } from "../../data";

const EditorsPick = () => {
  return (
    <div className="w-full flex justify-center bg-[#FAFAFA]">
      <div className="w-[73%] flex  flex-col items-center justify-center py-20 ">
        <div className="w-[58%] flex justify-center flex-col gap-2  align-center pb-8">
          <h1 className="text-2xl font-bold  text-[#252B42] tracking-wide">
            {data.editorsPick.heading}
          </h1>
          <p className="text-sm text-[#737373]">{data.editorsPick.paragraph}</p>
        </div>
        <div className="w-full flex flex-row justify-center gap-x-8">
          <div className="w-[48%] flex relative">
            <img
              src={data.editorsPick.card[0].image}
              alt="men"
              className="w-full"
            />
            <p className="flex absolute text-base bg-[#fff] py-3 px-16 text-[#252B42] font-bold mt-[85%] ml-[6%]">
              {" "}
              {data.editorsPick.card[0].name}
            </p>
          </div>
          <div className="w-[23%] flex relative">
            <img
              src={data.editorsPick.card[1].image}
              alt="women"
              className=" w-fulls"
            />
            <p className=" flex absolute text-base bg-[#fff] py-3 px-12 text-[#252B42] font-bold translate-x-[15%] mt-[178%] ">
              {" "}
              {data.editorsPick.card[1].name}
            </p>
          </div>
          <div className="flex flex-col justify-between w-[23%] relative">
            <div className="w-full flex relative">
              <img
                src={data.editorsPick.card[2].image}
                alt="accessories"
                className="w-full"
              />
              <p className="flex absolute text-base bg-[#fff] py-3 px-6 text-[#252B42] font-bold mt-[73%] ml-[6%]">
                {" "}
                {data.editorsPick.card[2].name}
              </p>
            </div>
            <div className="w-full flex relative">
              <img
                src={data.editorsPick.card[3].image}
                alt="kids"
                className="w-full"
              />
              <p className="flex absolute text-base bg-[#fff] py-3 px-10 text-[#252B42] font-bold mt-[73%] ml-[6%]">
                {" "}
                {data.editorsPick.card[3].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditorsPick;
