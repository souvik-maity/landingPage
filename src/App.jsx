import React from "react";

const App = () => {
  return (
    <div
      className="h-min-content w-full min-h-screen flex flex-col items-start justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpeg')" }}
    >
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4">
        <div className="w-[50px] h-[35px] sm:w-[61px] sm:h-[43px] rounded-md flex items-center justify-center">
          {/* Logo */}
          <img src="/logo1.svg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <button className="w-8 h-8 flex flex-col justify-around items-center focus:outline-none">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Big Logo */}
      <div className="mt-[150px] relative flex w-full h-auto pl-[20px] md:justify-start">
        <img
          src="/logo.svg"
          alt="Big Logo"
          className="w-[50%] max-w-[300px] sm:w-[40%] md:w-[30%] lg:w-[20%] h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="text-left mt-[80px] pl-[20px] md:pl-[30px] text-[#00E6E6] flex-grow">
        {/* Trade Paragraph */}
        <h1 className="text-l md:text-2xl font-bold mb-4 leading-[35px] md:leading-[50px] tracking-[3px]">
          Trade on the Outcome of Global Events
        </h1>
        {/* Smaller Paragraph */}
        <p className="text-[13px] md:text-lg mb-6 text-white leading-[20px] md:leading-[35px]">
          &quot; Use leverage to bet on real-world events <br />
          and shape your portfolio in a new way. &quot;
        </p>

        <button
          className="mt-[80px] w-[165px] h-[49.1px] bg-gradient-to-r from-[#00e6e6] to-[#00a9a9] text-white text-center font-semibold rounded-full"
          style={{
            background: "linear-gradient(-133deg, #00e6e6 0%, #00a9a9 100%)",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div className="mt-[100px] flex flex-col items-center justify-center text-center py-6 text-sm text-white w-full px-[20px]">
        <div className="w-[50px] h-[35px] sm:w-[61px] sm:h-[43px] rounded-md flex items-center justify-center">
          {/* Logo */}
          <img src="/logo1.svg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <p className="mt-4 text-white text-[10px] md:text-sm tracking-[3px] leading-[15px] md:leading-[20px]">
          Where every event is an <br />
          opportunity
        </p>
      </div>
    </div>
  );
};

export default App;
