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
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]  md:min-h-[700px] min-h-[900px] px-5 rounded-bl-[96px] w-full rounded-br-[96px] flex items-start mt-24">
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
        <div className="flex flex-wrap gap-2 justify-center items-center mt-14 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-4 py-2 max-w-[130px] rounded-xl text-[14px] font-normal 
            ${activeTab === tab.name ? "bg-[#424242] text-white" : "text-black"}
            sm:w-[calc(50%-0.25rem)] 
            md:w-[calc(33.333%-0.5rem)] 
            lg:w-[130px]`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="md:mt-[100px] mt-10 flex flex-col md:flex-row justify-center text-center md:items-start items-center md:p-0 p-3 gap-5">
          <img
            src={Dummy}
            className="md:max-w-[444px] max-w-[280px]  max-h-[290px]"
          />
          <div className="md:text-left text-center">
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
