import React from 'react';

const EventDetailsPopup = ({ event, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-flesh bg-opacity-50">
            <div className="bg-white p-5 rounded-lg max-w-md">
                <h2 className="text-xl font-bold">{event.eventName}</h2>
                <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleString('sv-SE')}</p>
                <p><strong>Stad:</strong> {event.city}</p>
                <p><strong>Adress:</strong> {event.address}</p>
                <a href={event.ticketPurchaseUrl} onClick={onClose} className="mt-3 mr-5 bg-DarkPurple text-white px-4 py-2 rounded">Biljetter</a>
                <button onClick={onClose} className="mt-3 bg-DarkPurple text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default EventDetailsPopup;
