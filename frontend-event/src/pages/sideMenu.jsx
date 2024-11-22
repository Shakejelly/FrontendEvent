import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../pages/styles/sideMenu.css';
import { Link } from 'react-router-dom';

function SideMenuLayout({ buttons }) {
    const [isOpen, setIsOpen] = useState(false);
    const userId = localStorage.getItem("userId");

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isOpen) {
                setIsOpen(false); // Close the sidebar on swipe left
            }
        },
        onSwipedRight: () => {
            if (!isOpen) {
                setIsOpen(true); // Open the sidebar on swipe right
            }
        },
        // Prevent swipe event from being consumed by buttons
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Optional: allows swipe with mouse
    });

    return (
        <div className={`swipe-menu border-r-2 border-solid border-gray-800 z-20  ${isOpen ? 'open' : ''}`} {...handlers}>
            {isOpen && (
                <div className='sidebar'>
                    <div className="sidebar_buttons #CE9F9F p-4 text-black h-full" onClick={e => e.stopPropagation()}>
                        <button className="bg-Flesh shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] 
                        hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] 
                        text-white w-full mb- py-2 px-1 rounded text-[1.2rem]">
                            <Link to={`/user/${userId}`} className='hover:text-white'>Profile</Link>
                        </button>
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                className={`${button.className} w-full mb- py-2 px-1 rounded`}
                                onClick={button.onClick}
                                style={{ fontSize: '1.2rem' }}
                            >
                                {button.label}
                            </button>
                        ))}
                        <button className="bg-Flesh shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] 
                        hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] 
                        text-white w-full mb- py-2 px-1 rounded text-[1.2rem]">
                            <Link to="/aboutus">About us</Link>
                        </button>
                    </div>
                </div>)}
        </div>
    );
}

export default SideMenuLayout;
