import { serviceCards } from "../../../constants/servicesData";
import { CiMobile2 } from "react-icons/ci";

function ServiceTilesCard() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 p-6 justify-center items-center">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#e2e0e0d8] rounded-lg w-fit"
          >
            <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#F7F7F7] to-[#FFFFFF] max-w-[250px] min-h-[300px] rounded-lg">
              <div className="rounded-full bg-[#424242] w-[40px] h-[40px] flex items-center justify-center">
                <CiMobile2 size={25} color="white" strokeWidth={0.5} />
              </div>

              <h3 className="text-2xl font-normal mb-2 text-[#424242] text-center">
                {card.topic}
              </h3>
              <p className="text-center text-sm text-[#757575]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceTilesCard;
