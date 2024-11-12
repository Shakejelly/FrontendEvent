import React, { useState } from 'react';

const SettingsPopup = ({ onClose }) => {
    const [buttonColor, setButtonColor] = useState("#FF0000"); // Default färg
    const [showHomeButton, setShowHomeButton] = useState(true); // Home-knapp synlig
    const [showCalendarButton, setShowCalendarButton] = useState(true); // Calendar-knapp synlig
    const [showSavedButton, setShowSavedButton] = useState(true);

    // Hantera färgändring
    const handleColorChange = (e) => {
        setButtonColor(e.target.value);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Settings</h2>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Button Color</label>
                    <input
                        type="color"
                        value={buttonColor}
                        onChange={handleColorChange}
                        className="w-16 h-8 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Show Home Button</label>
                    <input
                        type="checkbox"
                        checked={showHomeButton}
                        onChange={() => setShowHomeButton(!showHomeButton)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-2">Show Calendar Button</label>
                    <input
                        type="checkbox"
                        checked={showCalendarButton}
                        onChange={() => setShowCalendarButton(!showCalendarButton)}
                    />
                </div>
                <div className='mb-4'>
                    <label className='"block font-semibold mb-2"'>Show Saved Button</label>
                    <input
                        type="checkbox"
                        checked={showSavedButton}
                        onChange={() => setShowSavedButton(!showSavedButton)}
                    />
                    
                </div>

                {/* Stänger popupen */}
                <button 
                    onClick={onClose} 
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsPopup;
