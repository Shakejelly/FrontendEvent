import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

function SideMenuLayoutBackup() {
    const [isOpen, setIsOpen] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false), // Close the sidebar on swipe left
        onSwipedRight: () => setIsOpen(true), // Open the sidebar on swipe right
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div
            className={`swipe-menu border-r-2 border-gray-800 z-20 ${isOpen ? "open" : ""}`}
            {...handlers}
        >
            {isOpen && (
                <div className="sidebar p-4 bg-gray-100 h-full">
                    {/* User Button */}
                    <button className="block w-full py-2 px-4 mb-2 bg-red-200 hover:bg-red-300 text-white rounded">
                        <Link to="/user">User</Link>
                    </button>

                    {/* Events Button */}
                    <button className="block w-full py-2 px-4 mb-2 bg-red-200 hover:bg-red-300 text-white rounded">
                        <Link to="/events">Events</Link>
                    </button>

                    {/* About Button */}
                    <button className="block w-full py-2 px-4 bg-red-200 hover:bg-red-300 text-white rounded">
                        <Link to="/about">About</Link>
                    </button>
                </div>
            )}
        </div>
    );
}

export default SideMenuLayoutBackup;
