import React, { useState, useEffect } from 'react'
import EventDetailsPopup from './EventDetailsPopup';
import { jwtDecode } from 'jwt-decode';

const EventCard = ({ event, favorites, onFavoriteToggle }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const currentDate = new Date();

    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const theId = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    const userId = decodedToken[theId]
    const addEventToUserEndpoint = `https://localhost:7261/api/User/${userId}/event`;
    const removeEventFromuser = `https://localhost:7261/api/User/${userId}/event/${event.id}`

    const futureDates = event.dates.filter(date => new Date(date) > currentDate)

    useEffect(() => {
        // Check if the event is in the favorites array
        setIsFavorite(favorites.some(favoriteEvent => favoriteEvent.eventId === event.eventId));
    }, [favorites, event.eventId]); // Re-run when favorites or eventId change

    const handleFavoriteToggle = async () => {
        setIsFavorite(!isFavorite);

        onFavoriteToggle(event.id, !isFavorite);

        const eventToAdd = {
            eventId: event.eventId,
            category: event.category,
            title: event.title,
            description: event.description,
            imageUrl: event.imageUrl,
            apiEventUrlPage: event.apiEventUrlPage,
            eventUrlPage: event.eventUrlPage,
            date: event.dates[0],
            ticketsRelease: event.ticketsRelease,
            highestPrice: event.highestPrice,
            lowestPrice: event.lowestPrice,
            venue: {
                name: event.venue.name,
                address: event.venue.address,
                zipCode: event.venue.zipCode,
                city: event.venue.city,
                locationLat: event.venue.locationLat,
                locationLong: event.venue.locationLong,
            }
        };

        try {
            if (isFavorite) {
                // Remove event from favorites
                const favoriteEvent = favorites.find(favEvent => favEvent.eventId === event.eventId);

                const response = await fetch(`https://localhost:7261/api/User/${userId}/event/${favoriteEvent.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to remove event from user');
                }
                console.log("Event successfully removed from user");
            } else {
                // Add event to favorites
                const response = await fetch(`https://localhost:7261/api/User/${userId}/event`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventToAdd)
                });

                if (!response.ok) {
                    throw new Error('Failed to add event');
                }
                console.log("Event successfully added to user");

            }
        } catch (error) {
            console.error('Error handling favorite toggle:', error);
        }
    };

    const dateDisplay = futureDates.length > 1
        ? `${new Date(futureDates[0]).toLocaleString('sv-SE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
        })},    flera datum`
        : new Date(futureDates[0]).toLocaleString('sv-SE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
        });

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isPopupOpen]); // Add isPopupOpen as a dependency


    const handleDetailsClick = () => {
        console.log('Details clicked for', event.title, 'with ID:', event.eventId, event.lowestPrice, event);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="mt-8 m-auto flex-col w-5/6 max-w-full bg-Flesh border border-gray-200 rounded-lg shadow dark:purpleDark dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg object-cover w-full" src={event.imageUrl} alt="official event image" />
            </a>
            <div className="p-5 ">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">{dateDisplay}</p>
                <a href="#">
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h6>
                </a>
                <p className="mb-4">{event.venue.name} {event.venue.city}</p>
                <div className="flex flex-row justify-between">
                    <button onClick={handleDetailsClick} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-DarkPurple rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:purpleContrast dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Detaljer
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                    <button onClick={handleFavoriteToggle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={isFavorite ? "yellow" : "none"}
                            stroke={isFavorite ? "yellow" : "black"}
                            strokeWidth="2"
                            className="w-6 h-6 cursor-pointer"
                        >
                            <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                            />
                        </svg>
                    </button>

                </div>

            </div>

            {isPopupOpen && (
                <EventDetailsPopup event={event} onClose={handleClosePopup} />
            )}
        </div>


    );
}

export default EventCard
