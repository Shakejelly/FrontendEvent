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
           <div className='sidebar'>
                <div className="sidebar_buttons #CE9F9F p-4 text-white h-full" onClick={e => e.stopPropagation()}>
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
             
             <div className='sidebar_settings #CE9F9F p-4 bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white h-full' onClick={e => e.stopPropagation()}>
                    <button className='sidebar_settings_button'> Settings
                    </button>

                </div>
         </div>)}
         
        

        </div>
    );
}

export default SideMenuLayout;
