import Image from "../../../assets/images/me.png";

function ProfileImage() {
  return (
    <div className="relative flex justify-center flex-col items-center mt-3">
      <div className="relative  w-[250px] bg-gradient-to-b from-[#F4F2F2] to-[#F8F8F8] rounded-t-full flex items-start justify-center">
        <img
          src={Image}
          alt="Profile Image"
          className="rounded-full w-[252px]"
        />
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-center w-[500px]">
          <div className="font-semibold text-[32px] sm:text-[48px] text-[#424242] leading-tight">
            Where Creativity Meets Functionality
          </div>
          <div className="font-light text-[16px] sm:text-[20px] text-[#212121] mt-2">
            Innovative 3D, Stunning UI, Thoughtful UX.
          </div>
        </div>
        <div className="absolute top-28 -right-36 left-1/2 flex flex-col items-center justify-center text-center">
          <div className="bg-[#E8E8E8] w-[182px] rounded-full h-fit text-sm py-[8px] italic">
            <span className="text-[#DAFF06]">Vishwa</span>{" "}
            <span className="text-black">Bulegoda</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
