import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import SettingsPopup from '../compontents/SettingsPopup';  // Importera din SettingsPopup-komponent
import '../pages/styles/sideMenu.css';

function SideMenuLayout({ buttons, setButtons }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);  // State för att hantera öppning av settings-popupen

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isOpen) {
                setIsOpen(false); 
            }
        },
        onSwipedRight: () => {
            if (!isOpen) {
                setIsOpen(true); 
            }
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, 
    });

    const handleSettingsClick = () => {
        setIsSettingsOpen(true);  
    };

    const closeSettingsPopup = () => {
        setIsSettingsOpen(false); 
    };

    return (
        <>
            <div className={`swipe-menu border-r-2 border-solid border-gray-800 ${isOpen ? 'open' : ''}`} {...handlers}>
                {isOpen && (
                    <div className='sidebar'>
                        <div className='sidebar_userName font-extrabold text-black text-5xl hover:shadow-xl h-full' onClick={e => e.stopPropagation()}>
                            <button>User</button>
                        </div>
                        <div className="sidebar_buttons p-4 text-black h-full" onClick={e => e.stopPropagation()}>
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    className={`${button.className} w-full mb-4 py-2 px-10 rounded`}
                                    onClick={button.onClick}
                                    style={{ fontSize: '20px' }}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                        <div className='sidebar_footer flex p-1'>
                            <div className='sidebar_settings bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white'>
                                <button className='sidebar_settings_button' onClick={handleSettingsClick}>Settings</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {isSettingsOpen && <SettingsPopup onClose={closeSettingsPopup} setButtons={setButtons} />}
        </>
    );
}

export default SideMenuLayout;
