import React from "react";
import { flipCard } from "./common/Helper";
const FlipCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="flex flex-wrap justify-center">
        {flipCard.map((data , index)=>{
            return(
        <div key={index}  className="xl:w-3/12 w-full sm:w-9/12 md:w-6/12 px-2 mt-4 flex flex-col items-center">
          <div class="flip-card min-w-[320px] lg:min-w-[290px] max-w-[400px] sm:max-w-[unset] w-full h-[370px] md:h-[400px] xl:h-[360px]">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  className="xl:h-[310px] md:h-[340px] h-[310px] w-full object-cover"
                  src={data.babbuMaan}
                  alt="singer"
                />
                <h3 className="text-white font-bold text-2xl pt-2">
                  {data.FrontHeading}
                </h3>
              </div>
              <div class="flip-card-back flex justify-center items-center flex-col">
                <p className="text-white p-3">
                 {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
};

export default FlipCard;
