import { serviceCards } from "../../../constants/servicesData";
import { CiMobile2 } from "react-icons/ci";

function ServiceTilesCard() {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10 xl:grid-cols-4 gap-20 md:p-6 justify-center items-center">
        {serviceCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-[1px] bg-gradient-to-b from-[#FFFFFF] to-[#e2e0e0d8] rounded-xl w-fit "
          >
            <div className="flex flex-col items-center p-5 bg-gradient-to-b from-[#F7F7F7] to-[#FFFFFF] min-w-[250px] min-h-[300px] rounded-xl">
              <div className="rounded-full bg-[#424242] w-[40px] h-[40px] flex items-center justify-center mt-4">
                <CiMobile2 size={25} color="white" strokeWidth={0.5} />
              </div>

              <h3 className="text-xl font-medium mb-2 text-[#424242] text-center mt-3 max-w-[169px]">
                {card.topic}
              </h3>
              <p className="text-center font-normal text-sm text-[#757575] mt-1 max-w-[169px]">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceTilesCard;
