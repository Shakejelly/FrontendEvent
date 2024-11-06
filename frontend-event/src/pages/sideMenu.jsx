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
        <div className={`swipe-menu border-r-2 border-solid border-gray-800  ${isOpen ? 'open' : ''}`} {...handlers}>
            {isOpen && (
           <div className='sidebar'>
            <div className='sidebar_userName #CE9F9F font-extrabold text-black text-5xl hover:shadow-xl h-full' onClick={e => e.stopPropagation()}>
                <button>User</button>
            </div>
                <div className="sidebar_buttons #CE9F9F p-4 text-black h-full" onClick={e => e.stopPropagation()}>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            className={`${button.className} w-full mb- py-4 px-10 rounded`}
                            onClick={button.onClick}
                            style={{ fontSize: '20px' }} /* För att ändra textstorlek*/
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
             <div className='sidebar_footer flex p-1 '>
             <div className='sidebar_settings #CE9F9F p-1 bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white h-full' onClick={e => e.stopPropagation()}>
                    <button className='sidebar_settings_button'> Settings
                    </button>

                </div>
                <div className='sidebar_info flex rounded-full h-10 w-10 #CE9F9F p-1 bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white h-full'>
                    <button>i</button>
                </div>
             </div>
         </div>)}
         
        

        </div>
    );
}

export default SideMenuLayout;
