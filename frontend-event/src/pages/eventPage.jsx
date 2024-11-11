import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EventCard from '../compontents/EventCard';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const eventsPerPage = 10;
    const KbEventsEndpoint = 'https://localhost:7261/KBEventAPI/getEvents'; // API endpoint URL
    const ticketMasterEndpoint = 'https://localhost:7261/TicketMasterAPI/getEvents';
    const visitStockholmEndpoint = 'https://localhost:7261/VisitStockholmAPI/getEvents';
    const CACHE_EXPIRATION_TIME = 3600000; // Cache duration in milliseconds (1 hour)

    // Initial load: Check local cache
    useEffect(() => {
        const cachedEvents = localStorage.getItem('events');
        const cacheTimeStamp = localStorage.getItem('cacheTimestamp');
        const currentTime = Date.now();

        if (cachedEvents && cacheTimeStamp && (currentTime - cacheTimeStamp) < CACHE_EXPIRATION_TIME) {

            const parsedEvents = JSON.parse(cachedEvents)
            setEvents(parsedEvents);
            setDisplayedEvents(parsedEvents.slice(0, eventsPerPage));
            setLoading(false);
        } else {
            fetchEvents();  // Start with page 1
        }
    }, []);

    // Fetch events and store in cache
    const fetchEvents = async () => {
        try {
            setLoading(true);  // Start loading

            // Make API request
            const response = await axios.get(KbEventsEndpoint);
            const response2 = await axios.get(ticketMasterEndpoint);
            const response3 = await axios.get(visitStockholmEndpoint);

            const data = await response.data;
            const data2 = await response2.data;
            const data3 = await response3.data;

            const allEvents = [...data, ...data2, ...data3];

            setEvents(allEvents);
            setDisplayedEvents(allEvents.slice(0, eventsPerPage));



            localStorage.setItem('events', JSON.stringify(allEvents));
            localStorage.setItem('cacheTimestamp', Date.now().toString());

        } catch (error) {
            console.error('Error fetching events:', error);
            setError(error);  // Set error if fetching fails
        } finally {
            setLoading(false);  // Stop loading when done
        }
    };

    const loadMoreEvents = () => {
        const nextPage = page + 1;
        const newEvents = events.slice(0, nextPage * eventsPerPage);
        setDisplayedEvents(newEvents);
        setPage(nextPage);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
                !loading &&
                displayedEvents.length < events.length
            ) {
                loadMoreEvents();
            }
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, displayedEvents]);

    return (
        <>
            <main className="min-h-screen bg-DarkPurple flex justify-center">
                <div className="flex-col align-middle ml-20 justify-evenly content-evenly">
                    {/* Render each event in an EventCard component */}
                    {displayedEvents.map((event) => (
                        <EventCard key={event.eventId} event={event} />
                    ))}

                    {/* Show loading indicator */}
                    {loading && <div>Loading...</div>}

                    {/* Show error message if error occurred */}
                    {error && <div>Error loading events: {error.message}</div>}


                </div>
            </main>
        </>
    );
};

export default EventPage;
