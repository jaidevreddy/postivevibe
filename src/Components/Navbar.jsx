import React from 'react';
import logo from './icelogo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFD0] p-4 flex justify-between items-center border-b-2" style={{ borderColor: '#381A14', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
      <div className="flex items-center" style={{ marginLeft: '189px' }}>
        <img src={logo} alt="Logo" className="h-auto w-16 mr-2" />
      </div>
      <div className="flex space-x-6 font-semibold text-[#381a1f]">
        <a href="#home" className="text-black">ABOUT US</a>
        <a href="#product" className="text-black">OUR STORY</a>
        <a href="#about" className="text-black">ICE CREAMS</a>
      </div>
      <button className="bg-yellow-400 text-black px-4 border-2 border-[#4b2d2a] py-2 rounded-full" style={{ marginRight: '189px' }}>Contact</button>
    </nav>
  );
}

export default Navbar;
