import React, { useState, useEffect } from 'react';
import EventCard from '../compontents/EventCard';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const eventsPerPage = 5;

    const fetchEvents = async () => {
        try {
            const response = await fetch('/practice-events.json');
            const data = await response.json();

            const newEvents = data.slice((page - 1) * eventsPerPage, page * eventsPerPage);
            setHasMore(newEvents.length > 0);
            setEvents((prevEvents) => [...prevEvents, ...newEvents]);
        } catch (error) {
            console.error('error fetching events:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [page]);

    const loadMoreEvents = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <main className="min-h-screen bg-DarkPurple flex justify-center">
            <div className="flex flex-col align-middle ml-5 justify-evenly content-evenly gap-4">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
                {loading && <div>Loading...</div>}
                {!loading && hasMore && (
                    <button
                        className="my-4 px-4 py-2 bg-Flesh text-white rounded "
                        onClick={loadMoreEvents}
                    >
                        Load More
                    </button>
                )}
            </div>
        </main>
    );
};

export default EventPage;
