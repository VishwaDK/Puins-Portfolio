import Image from '../../../assets/images/me2.png'

function ProfileImage() {
  return (
    <div className="flex justify-center mt-[10px]">
      <div className=' bg-white rounded-full p-[10px]'>
        <img src={Image} alt="Profile Image" className="rounded-full w-[px] " />
      </div>
    </div>
  );
}

export default ProfileImage
