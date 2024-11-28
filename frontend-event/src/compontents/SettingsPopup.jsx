import React, { useState } from 'react';

const SettingsPopup = ({ onClose, setButtons }) => {
    const [showHomeButton, setShowHomeButton] = useState(true);
    const [showCalendarButton, setShowCalendarButton] = useState(true);
    const [showSavedButton, setShowSavedButton] = useState(true);

    const handleCheckboxChange = (setter, value) => {
        setter(!value); // Växla värdet när checkboxen ändras
    };

    const handleApplyChanges = () => {
        // Uppdatera knapparna baserat på de valda inställningarna
        setButtons((prevButtons) => {
            return prevButtons.map((button) => {
                if (button.label === "Home") {
                    return { ...button, visible: showHomeButton };
                }
                if (button.label === "Calender") {
                    return { ...button, visible: showCalendarButton };
                }
                if (button.label === "Saved") {
                    return { ...button, visible: showSavedButton };
                }
                return button;
            });
        });
        onClose(); // Stänger popupen efter att inställningarna applicerats
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-5 shadow-lg w-96">
                <h2 className="underline underline-offset-1 text-xl font-bold mb-4">Settings</h2>

                <div className="flex space-x-4 mb-4">
                    <label className="block font-semibold mb-2">Show Home Button</label>
                    <input
                        type="checkbox"
                        checked={showHomeButton}
                        onChange={() => handleCheckboxChange(setShowHomeButton, showHomeButton)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                </div>

                <div className="flex space-x-4 mb-4">
                    <label className="block font-semibold mb-2">Show Calendar Button</label>
                    <input
                        type="checkbox"
                        checked={showCalendarButton}
                        onChange={() => handleCheckboxChange(setShowCalendarButton, showCalendarButton)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                </div>

                <div className="flex space-x-4 mb-4">
                    <label className="block font-semibold mb-2">Show Saved Button</label>
                    <input
                        type="checkbox"
                        checked={showSavedButton}
                        onChange={() => handleCheckboxChange(setShowSavedButton, showSavedButton)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={handleApplyChanges}
                        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transition"
                    >
                        Apply Changes
                    </button>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-400 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopup;
