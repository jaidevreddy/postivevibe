import React from 'react';
import './LandingPage.css'; // Add this line to import your CSS file for icons

const LandingPage = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center relative">
      <div className="flex justify-between items-center w-full max-w-screen-lg mt-1">
        <div className="max-w-lg mr-12" style={{ marginTop: '-5rem' }}>
          <h1 className="text-[6rem] text-[#381A14] font-bold leading-none font-sans">Why <br /> Resist ?</h1>
          <p className="mt-4 text-[#4b2d2a]">
            Experience the sublime fusion of health and flavor with Positive Vibes ice cream—an exquisite treat for everyone.
            Delight in our luscious, guilt-free indulgence that <span className="relative">nourishes</span> your body and tantalizes your taste buds!
          </p>
          <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-full border-2" style={{ borderColor: '#4B2D2A' }}>Order Now</button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-6 left-6 bg-[#381A14] w-[28rem] h-[28rem] rounded-xl border-2 border-black"></div>
          <div className="absolute top-3 left-3 bg-[#AA714D] w-[28rem] h-[28rem] rounded-xl border-2 border-black"></div>
          <img src="https://tarateaspoon.com/wp-content/uploads/2021/06/chocolate-ice-cream-cones-sq.jpeg" alt="Product" className="relative w-[28rem] h-[28rem] rounded-xl border-2 border-black" />
        </div>
      </div>
      <i className="fas fa-ice-cream icon-1"></i>
      <i className="fas fa-heart icon-2"></i>
      <i className="fas fa-star icon-3"></i>
      <i className="fas fa-cookie icon-4"></i>
    </div>
  );
}

export default LandingPage;
