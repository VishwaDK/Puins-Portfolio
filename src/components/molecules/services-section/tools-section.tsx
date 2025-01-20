import icon7 from "../../../assets/svg/ai.svg";
import icon3 from "../../../assets/svg/blender.svg";
import icon8 from "../../../assets/svg/figma.svg";
import icon4 from "../../../assets/svg/mtb.svg";
import icon6 from "../../../assets/svg/photoshop.svg";
import icon2 from "../../../assets/svg/unity.svg";
import icon5 from "../../../assets/svg/zbrush.svg";
import icon1 from "../../../assets/svg/unreal.svg";

function ToolsSection() {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
 
  return (
    <div className="relative w-full overflow-hidden ">
      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .scroll-container {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
      
      <div className="flex w-full">
        <div className="flex scroll-container">

          {icons.map((icon, index) => (
            <div key={index} className="flex-shrink-0 mx-12">
              <img
                src={icon}
                alt={`Tool ${index + 1}`}
                className="w-16 h-16"
              />
            </div>
          ))}

          {icons.map((icon, index) => (
            <div key={`dup1-${index}`} className="flex-shrink-0 mx-12">
              <img
                src={icon}
                alt={`Tool ${index + 1}`}
                className="w-16 h-16"
              />
            </div>
          ))}

          {icons.map((icon, index) => (
            <div key={`dup2-${index}`} className="flex-shrink-0 mx-12">
              <img
                src={icon}
                alt={`Tool ${index + 1}`}
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ToolsSection;
