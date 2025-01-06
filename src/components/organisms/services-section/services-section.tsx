import SevicesIntroSection from "../../molecules/services-section/services-intro";
import ToolsSection from "../../molecules/services-section/tools-section";

function ServicesSectionContainer() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7] max-h-[810px] min-h-[810px] rounded-bl-[96px] rounded-br-[96px]">
        <ToolsSection />
        <SevicesIntroSection/>
    </div>
  );
}

export default ServicesSectionContainer;
