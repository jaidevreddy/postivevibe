import React from 'react';
import drip from './drip-pattern-secondary-1.png';
import ChocolateImage from './chocolate.png';
import VanillaImage from './vanilla.png';

const DelightfulLight = () => {
    return (
        <div className="relative min-h-screen bg-[#381A14] ">
            <div className="relative w-full">
                <img src={drip} alt="Background" className="w-full h-auto object-cover" />
            </div>
            <div className="flex flex-col h-full items-start justify-start p-10 mt-0">
                <div className="w-full flex mb-8">
                    <div className="w-2/5 ">
                        <h1 className="text-7xl font-bold text-[#f8d788] mb-2">DELIGHTFUL AND LIGHT</h1>
                        <p className="text-7xl text-[#f9ead3] mb-4">DISCOVER OUR FLAVOURS</p>
                        <p className="text-sm text-white">
                            * At least 32% fewer calories and 48% lower fat than the average best-selling tub ice cream.
                            For more information click <a href="#" className="underline">here</a> for Detailed Calories or <a href="#" className="underline">here</a> for Ingredients.
                        </p>
                    </div>
                    <div className="flex w-3/5 justify-around">
                        <div className="relative w-[45%] h-[370px] bg-[#f9dfd2] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <h2 className="text-6xl font-bold mb-2 text-brown-800">Chocolate</h2>
                            <p className="text-1xl text-brown-800">335 KCAL | TUB</p>
                            <img src={ChocolateImage} alt="Chocolate" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto w-[700px]" />
                            <button className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 bg-yellow-400 font-semibold border-2 border-[#ffffd0] text-brown-800 px-4 py-2 rounded-full">
                                Order Now
                            </button>
                        </div>
                       
                        <div className="relative w-[45%] h-[370px] bg-[#fff4db] p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <h2 className="text-6xl font-bold mb-2 text-brown-800">Vanilla</h2>
                            <p className="text-1xl text-brown-800">335 KCAL | TUB</p>
                            <img src={VanillaImage} alt="Vanilla" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto w-[250px]" />
                            <button className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 bg-yellow-400 font-semibold border-2 border-[#ffffd0] text-brown-800 px-4 py-2 rounded-full">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DelightfulLight;
