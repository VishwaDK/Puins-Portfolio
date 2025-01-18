import ServiceTilesCard from "../../molecules/services-section/service-tiles";
import SevicesIntroSection from "../../molecules/services-section/services-intro";
import ToolsSection from "../../molecules/services-section/tools-section";

function ServicesSectionContainer() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7]  min-h-[810px] rounded-bl-[96px] rounded-br-[96px]">
        <ToolsSection />
        <SevicesIntroSection/>
        <ServiceTilesCard/>
    </div>
  );
}

export default ServicesSectionContainer;
