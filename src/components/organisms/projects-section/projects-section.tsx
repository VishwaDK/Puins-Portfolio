import { useState } from "react";
import Dummy from "../../../assets/svg/dummy.svg";

const ProjectsSectionContainer = () => {
  const [activeTab, setActiveTab] = useState("All Projects");

  const tabs = [
    { name: "All Projects", content: "SmilePay - Fintech Admin Page" },
    { name: "3D Design", content: "3D design content with image" },
    { name: "UI/UX Design", content: "UI/UX design content with image" },
    { name: "Animation", content: "Animation design content with image" },
    { name: "Logo Design", content: "Logo design content with image" },
  ];

  const activeContent = tabs.find((tab) => tab.name === activeTab)?.content;

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]  min-h-[830px] rounded-bl-[96px] w-full rounded-br-[96px] flex items-center">
      <div className="h-[600px] w-full">
        <div className="flex flex-col text-center justify-center items-center">
          <div className="text-[24px] font-semibold text-[#424242]">
            Projects
          </div>
          <div className="max-w-[503px] text-center flex text-[16px] text-[#212121] mt-3">
            Crafting 3D designs, intuitive interfaces, and bold graphics that
            bring concepts to life with creativity and precision.
          </div>
        </div>
        <div className="flex justify-center mt-14">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-4 py-2 mx-4 rounded-xl text-[14px] font-normal ${
                activeTab === tab.name
                  ? "bg-[#424242] text-white"
                  : " text-black"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="mt-[100px] flex justify-center items-start gap-5">
          <img src={Dummy} className="max-w-[444px] max-h-[290px]" />
          <div className="text-left ">
            <p className="text-[20px] font-semibold">{activeTab}</p>
            <div className="mt-4 text-[32px] max-w-[400px] font-medium ">
              {activeContent}
            </div>
            <div className="mt-4 max-w-[442px] text-[16px] font-light italic">
              SmilePay is a financial application that can manage, store and
              manage money safely.SmilePay is a financial application that can
              manage, store and manage money safely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSectionContainer;
