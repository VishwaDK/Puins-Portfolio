import NavBar from "../../molecules/hero-section/nav-bar";
import ProfileImage from "../../molecules/hero-section/profile-image";

function HeaderSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7] max-h-[725px] min-h-[725px] rounded-bl-[96px] rounded-br-[96px]">
      <NavBar/>
      <ProfileImage />

    </div>
  );
}

export default HeaderSection
