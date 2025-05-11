import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner1.webp';
import Banner2 from '../assets/banner2.jpg';
import Banner3 from '../assets/banner3.webp';

const bannerData = [
  {
    id: 1,
    img: Banner1,
  },
  {
    id: 2,
    img: Banner2,
   
  },
  {
    id: 3,
    img: Banner3,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg mb-8">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? ' z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
          />
          
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-5">
        <button onClick={handlePrev} className="btn btn-circle text-white bg-black bg-opacity-40 hover:bg-opacity-70">❮</button>
        <button onClick={handleNext} className="btn btn-circle text-white bg-black bg-opacity-40 hover:bg-opacity-70">❯</button>
      </div>
    </div>
  );
};

export default Banner;
