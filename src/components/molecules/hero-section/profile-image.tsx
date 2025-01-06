import Image from "../../../assets/images/me.png";

function ProfileImage() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[582px] w-[283px] bg-gradient-to-b from-[#F4F2F2] to-[#F8F8F8]  rounded-t-full flex items-start justify-center">
        <img
          src={Image}
          alt="Profile Image"
          className="rounded-full w-[252px]"
        />
      </div>
    </div>
  );
}

export default ProfileImage;
