import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HappeningNavbarLogo.png";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const userId = localStorage.getItem("userId");

    return (
        <nav className="bg-Flesh text-black shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                <img src={logo} alt="Logo" className="h-14 py-1" />
                <button
                    className="text-xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>
            <div
                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="bg-inherit px-4 py-2 space-y-2">
                    <li>
                        <Link
                            to={`/user/${userId}`}
                            className="block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-1 px-4 rounded-md shadow-sm transition-colors duration-200 text-center max-w-[90%] mx-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            className="block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-1 px-4 rounded-md shadow-sm transition-colors duration-200 text-center max-w-[90%] mx-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            Evenemang
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutus"
                            className="block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-1 px-4 rounded-md shadow-sm transition-colors duration-200 text-center max-w-[90%] mx-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            Om Oss
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/start"
                            className="block bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded-md shadow-sm transition-colors duration-200 text-center max-w-[90%] mx-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            Logga Ut
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;
