import React from "react";

const ComingSoonCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#100d08] text-white px-6">
     
      <div className="mb-6">
        <img
          src="./comingsoon.svg" 
          alt="Coming Soon"
          className="w-full max-w-sm" // Responsive image holder
        />
      </div>

      {/* Text Below First Image */}
      <div
        className="text-center text-xs tracking-widest mb-6"
        style={{ fontFamily: "Microsoft Yi Baiti" }}
      >
        Desktop, leaderboards,
        <br />
        achievement bonuses,
        <br />
        And more.
      </div>

      {/* Second Image (Logo) */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded flex items-center justify-center">
          <img
            src="./logo.svg" 
            alt="Logo"
            className="w-12 h-12 object-contain" // Responsive logo
          />
        </div>
      </div>

      {/* Third Image (Additional Figma Design) */}
      <div className="mb-6">
        <div className="w-full max-w-sm  overflow-hidden">
          <img
            src="./halfmoon.svg" 
            alt="Additional Design"
            className="w-full h-auto"  
          />
        </div>
      </div>

      {/* Button */}
      <button className="px-8 py-1.5 bg-cyan-500 text-black rounded-full hover:bg-cyan-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default ComingSoonCard;
