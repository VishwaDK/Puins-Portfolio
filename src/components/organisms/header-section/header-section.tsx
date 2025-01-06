import HeroText from "../../molecules/hero-section/hero-text";
import ProfileImage from "../../molecules/hero-section/profile-image";

function HeaderSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7] max-h-[725px] min-h-[725px] rounded-bl-[96px] rounded-br-[96px]">
      <ProfileImage />
      <HeroText />
    </div>
  );
}

export default HeaderSection
