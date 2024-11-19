import axios from 'axios';
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import ChooseDateButton from '../components/ChooseDate';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);

    const eventsPerPage = 10;
    const ticketMasterEndpoint = 'https://localhost:7261/TicketMasterAPI/getEvents';
    const visitStockholmEndpoint = 'https://localhost:7261/VisitStockholmAPI/getEvents';

    // Fetch events from both APIs with pagination
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);

                const [response1, response2] = await Promise.all([
                    axios.get(`${ticketMasterEndpoint}?page=${page}&limit=${eventsPerPage}`),
                    axios.get(`${visitStockholmEndpoint}?page=${page}&limit=${eventsPerPage}`)
                ]);

                // Backend ska lägga till Pagination för Ticketmaster?

                const allEvents = [...response1.data, ...response2.data];
                console.log("All Events:", allEvents);

                // Sort and remove duplicates
                const sortedEvents = allEvents.sort((a, b) => {
                    const dateA = new Date(a.dates[0]);
                    const dateB = new Date(b.dates[0]);
                    return dateA - dateB;
                });

                const seen = new Set();
                const uniqueEvents = sortedEvents.filter(event => {
                    const uniqueKey = `${event.name}-${event.dates[0]}-${event.location}`;
                    if (seen.has(uniqueKey)) {
                        return false;
                    }
                    seen.add(uniqueKey);
                    return true;
                });

                console.log("Unique Events:", uniqueEvents);

                // Set events and filter the first 10
                setEvents(prevEvents => [...prevEvents, ...uniqueEvents]);
                setDisplayedEvents(prevDisplayed => [...prevDisplayed, ...uniqueEvents]);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, [page]);  // Triggered on page change

    // Handle date selection and filter events
    const handleDateSelect = (date) => {
        setSelectedDate(date);  // Update selected date
    };

    // Filter events based on the selected date
    useEffect(() => {
        if (selectedDate) {
            const filteredEvents = events.filter(event =>
                event.dates.some(eventDateString => {
                    const eventDate = new Date(eventDateString); // Parse the date string into a Date object
                    return eventDate >= selectedDate; // Check if the event's date is on or after the selected date
                })
            );
            setDisplayedEvents(filteredEvents.slice(0, eventsPerPage));  // Set filtered events to the state
        } else {
            setDisplayedEvents(events.slice(0, eventsPerPage));  // Show all events if no date is selected
        }
    }, [selectedDate, events]);

    useEffect(() => {
        console.log("displayedEvents", displayedEvents)
    })

    // Handle infinite scroll to load more events
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
                !loading
            ) {
                setPage(prevPage => prevPage + 1); // Go to the next page
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <main className="bg-DarkPurple">
            <div className="-z-20">
                <ChooseDateButton onDateSelect={handleDateSelect} />
            </div>
            <div className="min-h-screen pt-10 bg-DarkPurple flex flex-col align-middle justify-evenly content-evenly">
                {displayedEvents.map((event) => (
                    <EventCard key={event.eventId} event={event} />
                ))}

                {loading && <div class="flex justify-center items-center">
                    <div class="animate-spin rounded-full border-t-4 border-white border-solid w-16 h-16"></div>
                </div>}
                {error && <div>Error loading events: {error.message}</div>}
            </div>
            {/* <div class="bg-gray-100 rounded-lg p-4 w-full max-w-sm mx-auto">

                <div class="text-center mb-2 text-gray-800 font-medium">
                    Laddade 40 av 630 evenemang
                </div>
                <div class="h-1 bg-gray-300 rounded-full overflow-hidden mb-4">
                    <div class="h-full w-1/6 bg-black"></div>
                </div>


                <button class="flex items-center justify-center w-full py-2 border border-gray-400 rounded-full text-gray-800 font-medium">
                    Fler evenemang
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div> */}
        </main>
    );
};

export default EventPage;
