import React from "react";

const TradeApp = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-8"
      style={{ backgroundColor: "#121c26", minHeight: "100vh" }}
    >
      {/* Heading */}
      <h1 className="text-white text-lg md:text-2xl font-semibold mb-6 text-center">
        Start trading in{" "}
        <span className="text-[#00E6E6] text-3xl md:text-4xl lg:text-5xl">
          minutes.
        </span>
      </h1>

      {/* Chart/Image Section */}
      <div className="w-11/12 md:w-3/4 lg:w-1/2 flex justify-center items-center rounded-md overflow-hidden">
        <img
          src="/vid.svg" // Replace with your actual chart/image path
          alt="Chart"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Steps */}
      <div className="mt-8 text-sm md:text-base text-white space-y-4 px-6">
        <p className="flex items-center">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00E6E6] text-black font-semibold mr-3">
            1
          </span>
          Sign up.
        </p>
        <p className="flex items-center">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00E6E6] text-black font-semibold mr-3">
            2
          </span>
          Browse global events and place your trades.
        </p>
        <p className="flex items-center">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#00E6E6] text-black font-semibold mr-3">
            3
          </span>
          Watch outcomes and profit if you're correct.
        </p>
      </div>

      {/* Button */}
      <button
        className="mt-12 px-14 py-1 bg-[#00E6E6] text-[#121c26] font-medium rounded-full shadow-md hover:opacity-90 transition-opacity"
      >
        Get Started
      </button>
    </div>
  );
};

export default TradeApp;
