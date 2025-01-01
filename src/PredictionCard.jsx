import React from "react";

const PredictionCard = () => {
  return (
    <div className="bg-[#162326] min-h-screen flex flex-col items-center justify-start pt-10 px-4">
      {/* Top Paragraph */}
      <p
        className="text-[#00e6e6] font-medium text-[15px] leading-[26px] md:text-[21px] md:leading-[30px] lg:text-[27px] lg:leading-[34px] tracking-widest text-left max-w-[355px]"
        style={{ fontFamily: '"Noto Sans JP"', fontStyle: "normal" }}
      >
        " Predict real-world outcomes
        <br />
        and profit when you’re right. "
      </p>

      {/* Spacing Between Paragraphs */}
      <div className="h-6 md:h-10 lg:h-12 mb-3"></div>

      {/* Leverage Paragraph */}
      <p
        className="text-[#ffffff] text-[13px] md:text-[15px] lg:text-[16px] leading-[24px] md:leading-[28px] lg:leading-[30px] tracking-widest mb-4 max-w-[400px] text-center"
        style={{ fontFamily: '"Noto Sans JP"', fontStyle: "normal" }}
      >
        Leverage on event-based trades, <br />
        simple onboarding, quick payouts, <br />
        a global selection of events
      </p>
      <div className="h-6 md:h-9 lg:h-11 mb-3"></div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {/* First Row */}
        <div className="flex gap-2">
          {["Sports", "Crypto", "Politics", "Weather"].map((category) => (
            <div
              key={category}
              className="px-2 py-1 md:px-3 md:py-1.5 rounded-full cursor-pointer text-xs md:text-sm transition-colors bg-white bg-opacity-10 text-[#00e6e6] hover:bg-[#00e3e3] hover:text-[#001d1d]"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-2 mt-2">
          {["Science", "Culture", "Tech"].map((category) => (
            <div
              key={category}
              className="px-2 py-1 md:px-3 md:py-1.5 rounded-full cursor-pointer text-xs md:text-sm transition-colors bg-white bg-opacity-10 text-[#00e6e6] hover:bg-[#00e3e3] hover:text-[#001d1d]"
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8">
        <img
          src="/prediction.svg" 
          alt="Prediction Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default PredictionCard;
