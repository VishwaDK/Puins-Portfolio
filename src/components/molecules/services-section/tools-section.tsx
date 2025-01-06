import icon7 from "../../../assets/svg/ai.svg";
import icon3 from "../../../assets/svg/blender.svg";
import icon8 from "../../../assets/svg/figma.svg";
import icon4 from "../../../assets/svg/mtb.svg";
import icon6 from "../../../assets/svg/photoshop.svg";
import icon2 from "../../../assets/svg/unity.svg";
import icon5 from "../../../assets/svg/zbrush.svg";
import icon1 from "../../../assets/svg/unreal.svg";

function ToolsSection() {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7,icon8];

  return (
    <div className="flex justify-center mt-[60px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-[40px] sm:gap-[60px] md:gap-[80px] xl:gap-[100px] justify-center items-center">
        {icons.map((icon, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={icon} alt={`Icon ${index + 1}`} className="w-16 h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsSection;
