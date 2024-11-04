import axios from 'axios'
import React, { useState, useEffect } from 'react'
import EventCard from '../compontents/EventCard'

const eventPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true); // Track if there are more events to load
    const eventsPerPage = 5;

    const apiEndPoint = 'https://localhost:7261/Event/Stockholm';

    const fetchEvents = async () => {
        try {

            const response = await fetch('/practice-events.json');

            // const response = await axios.get(apiEndPoint)

            const data = await response.json();

            const newEvents = data.slice((page - 1) * eventsPerPage, page * eventsPerPage)

            setHasMore(newEvents.length > 0);

            setEvents((prevEvents) => [...prevEvents, ...newEvents])
        } catch (error) {
            console.error('error fetching events:', error)
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchEvents();
    }, [page]);



    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
            !loading &&
            hasMore
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loading, hasMore])

    return (
        <>
            <main className='min-h-screen bg-DarkPurple flex justify-center'>
                <div className='flex-col align-middle ml-5 justify-evenly content-evenly'>
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                    {loading && <div>Loading...</div>}
                </div>
            </main>
        </>
    )
}

export default eventPage
