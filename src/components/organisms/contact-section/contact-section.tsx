import ContactInfoComponent from "../../molecules/contact-section/contact-info";
import EmailMeComponent from "../../molecules/contact-section/email-me";
import Rocket from "../../../assets/svg/rocket.svg";

function ContactSectionContainer() {
  return (
    <div className="bg-white max-h-[400px] min-h-[400px] rounded-bl-[96px] rounded-br-[96px]">
      <div className="flex justify-center gap-3 mt-14">
        <div className="grid grid-cols-1  max-w-[470px]">
          <div className="flex justify-center">
            <img src={Rocket} className="max-w-[72px] h-auto" />
          </div>
          <div className="text-5xl font-semibold mt-6 text-center text-[#484747] leading-[60px]">
            Ready to start your next project?
          </div>
          <div className="flex flex-cols gap-3 justify-center mt-12">
            <EmailMeComponent />
            <ContactInfoComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSectionContainer;
