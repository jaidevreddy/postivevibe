import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFD0] p-4 flex justify-between items-center border-b-2" style={{ borderColor: '#381A14', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
      <div className="logo text-xl font-bold" style={{ marginLeft: '189px' }}>Logo</div>
      <div className="flex space-x-6">
        <a href="#home" className="text-black">Home</a>
        <a href="#product" className="text-black">Product</a>
        <a href="#about" className="text-black">About</a>
      </div>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full" style={{ marginRight: '189px' }}>Contact</button>
    </nav>
  );
}

export default Navbar;
