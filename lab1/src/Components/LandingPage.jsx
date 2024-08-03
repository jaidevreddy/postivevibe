import React from 'react';
import './LandingPage.css'; // Add this line to import your CSS file for icons

const LandingPage = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-screen-lg mt-1">
        <div className="max-w-lg mr-12" style={{ marginTop: '-5rem' }}>
          <h1 className="text-[6rem] text-[#381A14] font-bold leading-none">Why <br /> Resists</h1>
          <p className="mt-4 text- text-[#4b2d2a]">Experience the sublime fusion of health and flavor with Positive Vibes ice cream—an exquisite treat for everyone. Delight in our luscious, guilt-free indulgence that nourishes your body and tantalizes your taste buds!</p>
          <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-full border-2" style={{ borderColor: '#4B2D2A' }}>Order Now</button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-6 left-6 bg-[#381A14] w-[28rem] h-[28rem] rounded-xl border-2 border-black"></div>
          <div className="absolute top-3 left-3 bg-[#AA714D] w-[28rem] h-[28rem] rounded-xl border-2 border-black"></div>
          <img src="https://tarateaspoon.com/wp-content/uploads/2021/06/chocolate-ice-cream-cones-sq.jpeg" alt="Product" className="relative w-[28rem] h-[28rem] rounded-xl border-2 border-black" />
        </div>
      </div>
      {/* Placeholder for icons */}
      <div className="absolute top-4 right-4">
        <span className="icon-star"></span>
      </div>
      <div className="absolute top-8 left-8">
        <span className="icon-coffee-bean"></span>
      </div>
    </div>
  );
}

export default LandingPage;
