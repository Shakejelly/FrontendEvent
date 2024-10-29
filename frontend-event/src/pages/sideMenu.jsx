import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../pages/styles/sideMenu.css';

function SideMenuLayout({ buttons }) {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className={`swipe-menu ${isOpen ? 'open' : ''}`} {...handlers}>
            {isOpen && (
                <div className="sidebar #CE9F9F p-4 text-white h-full" onClick={e => e.stopPropagation()}>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`${button.className} w-full text-left mb-2 py-2 px-4 rounded`}
                            onClick={button.onClick}
                            style={{ fontSize: '14px' }} // Adjust the font size as needed
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SideMenuLayout;
