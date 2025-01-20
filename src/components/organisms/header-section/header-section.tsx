import NavBar from "../../molecules/hero-section/nav-bar";
import ProfileImage from "../../molecules/hero-section/profile-image";

function HeaderSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] min-h-[650px] rounded-bl-[96px] rounded-br-[96px]">
      <NavBar/>
      <ProfileImage />
    </div>
  );
}

export default HeaderSection
