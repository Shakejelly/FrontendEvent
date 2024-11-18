import React from "react";
import logo from '../assets/EVLogo.png'

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#71546B] flex flex-col text-center">
            {/* Header Section */}
            <div className="bg-[url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] 
            p-4 shadow-lg w-full h-[500px] bg-cover flex flex-col justify-center">          <img src={logo}></img>

            </div>
            <div className="p-4 shadow-lg w-full  bg-cover flex flex-col">
                <h1 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
                    Event Vault
                </h1>
                <p className="text-white text-base sm:text-lg leading-relaxed">
                    All your events in one place. Combine, organize, and never miss a
                    moment.
                </p>
            </div>
            {/* Action Section */}
            <div className="mt-6 flex flex-col gap-4 w-full px-6">
                <button className="bg-white text-[#71546B] w-full py-3 rounded-lg font-semibold border-2 border-[#71546B] hover:bg-[#f4e4e4] transition">
                    Log In
                </button>
                <button className="bg-[#71546B] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#5a4255] transition">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
