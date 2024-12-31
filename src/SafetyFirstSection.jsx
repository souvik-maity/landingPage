import React, { useState } from "react";

const SafetyFirstSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/carou1.svg",
    },
    {
      id: 2,
      image: "/carou2.svg",
    },
  ];

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const endX = e.touches[0].clientX;
    const difference = startX - endX;

    if (difference > 50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsSwiping(false);
    } else if (difference < -50) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center  py-12"
      style={{ backgroundColor: "#001D1D", minHeight: "100vh" }}
    >
      {/* Heading */}
      <h2 className="text-white mx-4 text-base md:text-lg font-semibold mt-8 mb-2">
        OWASP Top 10 Certification
      </h2>
      <h1
        className="text-[#00E6E6] mx-4 text-4xl md:text-5xl font-medium mb-6"
        style={{ letterSpacing: "0.1em" }}
      >
        SAFETY <span className="text-white">FIRST</span>
      </h1>
      <p className="text-white mx-4 text-left text-sm md:text-base max-w-xl leading-relaxed mb-8">
        Advanced fraud protection, rigorous security features, 24/7 monitoring,
        and customer support will secure your money — your safety is our
        priority.
      </p>

      {/* OWASP Logo */}
      <img src="/owasp.svg" alt="OWASP Logo" className="w-26 h-35 mb-6" />

      {/* Carousel */}
      
<div
  className="relative w-full flex overflow-hidden snap-x snap-mandatory px-6 ml-8" // Added px-6 for horizontal padding
  style={{ maxWidth: "100vw" }}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`snap-start flex-shrink-0 w-full h-80 md:h-[60vh] relative rounded-lg overflow-hidden transition-transform duration-500`}
      style={{
        transform: `translateX(${-currentSlide * 100}%)`,
        marginRight: index === slides.length - 1 ? "0" : "1rem", // Optional gap between images
      }}
    >
      <img
        src={slide.image}
        alt={`Slide ${slide.id}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


      {/* Dots */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#00E6E6]" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>

      {/* Intuitive Section */}
      <div className="relative w-full  px-6 py-12 bg-[#002727] mt-8 rounded-xl md:rounded-2xl lg:rounded-3xl">
  <div className="w-full tracking-wider flex flex-col items-start justify-start">
    {/* Heading */}
    <h2 className="text-[#00E6E6] text-left text-xl md:text-3xl font-medium mb-4 leading-tight">
      Intuitive <br />
      <span className="text-white text-2xl">User Interface</span>
    </h2>

    {/* Description */}
    <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl mb-4 text-left">
      EveryX is designed with user-friendly navigation, making it easy for
      users to create predictions and manage trades.
    </p>
    <p className="text-white text-sm md:text-base leading-relaxed max-w-2xl text-left mb-4">
      Whether you're a beginner or an experienced trader, the platform
      ensures a seamless experience.
    </p>

    {/* Image */}
    <div className="relative w-full max-w-2xl overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl shadow-md">
      <img
        src="/uipic.svg"
        alt="User Interface Preview"
        className="w-full object-cover"
      />
    </div>
  </div>
</div>



    </div>
  );
};

export default SafetyFirstSection;
