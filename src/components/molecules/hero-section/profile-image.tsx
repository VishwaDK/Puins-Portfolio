import Image from '../../../assets/images/me.png'

function ProfileImage() {
  return (
    <div className='flex justify-center'>
        <img src={Image} alt="Profile Image" className="rounded-full w-[200px] h- " />
      
    </div>
  )
}

export default ProfileImage
