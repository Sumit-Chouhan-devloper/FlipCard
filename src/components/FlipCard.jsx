import React from "react";
import babbuMaan from "../assets/images/png/babbu-maan.jpg";
const FlipCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-3 !my-12">
      <div className="flex flex-wrap justify-center">
        <div className="xl:w-3/12 max-w-[420px] sm:max-w-[unset] sm:w-9/12 md:w-6/12 px-2 my-2">
          <div className="card w-full md:min-h-[500px] lg:min-h-[380px]">
            <div className="content">
              <div className="front">
                <img
                  className="xl:h-[310px] md:h-[340px] h-[310px] w-full object-cover"
                  src={babbuMaan}
                  alt="singer"
                />
                <h3 className="text-black font-bold text-2xl pt-2">hover me</h3>
              </div>
              <div className="back">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, distinctio adipisci dolores sint soluta maxime! Ad,
                quas totam quibusdam autem voluptatum, assumenda mollitia
                aspernatur sint molestiae commodi corporis doloremque libero?
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-3/12 max-w-[420px] sm:max-w-[unset] sm:w-9/12 md:w-6/12 px-2 my-2">
          <div className="card w-full">
            <div className="content">
              <div className="front">
                <img
                  className="xl:h-[310px] md:h-[340px] h-[310px] w-full object-cover"
                  src={babbuMaan}
                  alt="singer"
                />
                <h3 className="text-black font-bold text-2xl pt-2">hover me</h3>
              </div>
              <div className="back">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, distinctio adipisci dolores sint soluta maxime! Ad,
                quas totam quibusdam autem voluptatum, assumenda mollitia
                aspernatur sint molestiae commodi corporis doloremque libero?
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-3/12 max-w-[420px] sm:max-w-[unset] sm:w-9/12 md:w-6/12 px-2 my-2">
          <div className="card w-full">
            <div className="content">
              <div className="front">
                <img
                  className="xl:h-[310px] md:h-[340px] h-[310px] w-full object-cover"
                  src={babbuMaan}
                  alt="singer"
                />
                <h3 className="text-black font-bold text-2xl pt-2">hover me</h3>
              </div>
              <div className="back">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, distinctio adipisci dolores sint soluta maxime! Ad,
                quas totam quibusdam autem voluptatum, assumenda mollitia
                aspernatur sint molestiae commodi corporis doloremque libero?
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-3/12 max-w-[420px] sm:max-w-[unset] sm:w-9/12 md:w-6/12 px-2 my-2">
          <div className="card w-full">
            <div className="content">
              <div className="front">
                <img
                  className="xl:h-[310px] md:h-[340px] h-[310px] w-full object-cover"
                  src={babbuMaan}
                  alt="singer"
                />
                <h3 className="text-black font-bold text-2xl pt-2">hover me</h3>
              </div>
              <div className="back">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, distinctio adipisci dolores sint soluta maxime! Ad,
                quas totam quibusdam autem voluptatum, assumenda mollitia
                aspernatur sint molestiae commodi corporis doloremque libero?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
