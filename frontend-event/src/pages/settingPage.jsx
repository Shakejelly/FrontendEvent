import React, { useState } from 'react';
import SettingsPopup from '../components/SettingsPopup';
import SideMenuLayout from './SideMenuLayout'; // Se till att importera denna
import { Link } from 'react-router-dom';

const ParentComponent = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [buttonColor, setButtonColor] = useState("#FF0000"); // Default button color
    const [showHomeButton, setShowHomeButton] = useState(true);
    const [showCalendarButton, setShowCalendarButton] = useState(true);
    const [showSavedButton, setShowSavedButton] = useState(true);

    const applyChanges = (settings) => {
        setButtonColor(settings.buttonColor);
        setShowHomeButton(settings.showHomeButton);
        setShowCalendarButton(settings.showCalendarButton);
        setShowSavedButton(settings.showSavedButton);
        setIsPopupOpen(false); // Stänger popupen efter att inställningarna applicerats
    };

    // const buttonsConfig = [
    //     {
    //         label: "Home",
    //         className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
    //         to: "/home"
    //     },
    //     {
    //         label: "Calender",
    //         className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
    //     },
    //     {
    //         label: "Saved",
    //         className: "bg-red-200 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.6)] hover:bg-red-200 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] text-white",
    //     },
    // ];

    return (
        <div>
            <button onClick={() => setIsPopupOpen(true)}>Open Settings</button>
            {isPopupOpen && (
                <SettingsPopup
                    onClose={() => setIsPopupOpen(false)} // Stänger popupen
                    applyChanges={applyChanges} // Skickar applyChanges till popupen
                    buttonColor={buttonColor}
                    showHomeButton={showHomeButton}
                    showCalendarButton={showCalendarButton}
                    showSavedButton={showSavedButton}
                />
            )}
            {/* Skicka nödvändiga props till SideMenuLayout */}
            <SideMenuLayout
                buttons={buttonsConfig}
                showHomeButton={showHomeButton}
                showCalendarButton={showCalendarButton}
                showSavedButton={showSavedButton}
            />
        </div>
    );
};

export default ParentComponent;
