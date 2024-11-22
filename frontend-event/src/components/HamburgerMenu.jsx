import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HappeningNavbarLogo.svg"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-Flesh text-black shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                {/* <img src={logo} alt="Logo" className="h-16 py-1" /> */}
                <h1 className="text-lg font-bold">Happening</h1>
                <button
                    className="text-xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>
            <div
                className={` mr-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"
                    }`}
            >
                <ul className="bg-inherit px-4 py-2 space-y-2">
                    <li>
                        <Link to="/user/:userId" className="block hover:text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="block hover:text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            Evenemang
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="block hover:text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            Om Oss
                        </Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="block hover:text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            Logga Ut
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;
