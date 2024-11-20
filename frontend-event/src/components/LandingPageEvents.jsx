import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LandingPageEventCards from './LandingPageEventCard'


const LandingPageEvents = () => {
    const [events, setEvents] = useState([]);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const ticketMasterEndpoint = 'https://localhost:7261/TicketMasterAPI/getEvents';
    const visitStockholmEndpoint = 'https://localhost:7261/VisitStockholmAPI/getEvents';

    const normalizeImageUrl = (url) => {
        if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);

                const [response1, response2] = await Promise.all([
                    axios.get(ticketMasterEndpoint),
                    axios.get(visitStockholmEndpoint)
                ]);

                let allEvents = [...response1.data, ...response2.data];

                // Normalize image URLs
                allEvents = allEvents.map(event => ({
                    ...event,
                    imageUrl: normalizeImageUrl(event.imageUrl),
                }));

                console.log("All Events with Normalized URLs:", allEvents);

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

                const lessEvents = uniqueEvents.slice(0, 20);



                setEvents(lessEvents);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);  // Empty array to only run once on mount

    return (
        <>
            <div className='!mb-4 flex flex-row space-x-1 overflow-x-auto w-3/4 h-[auto] scrollbar-hide bg-red-200 shadow-lg shadow-red-200/50 rounded-md'>
                {events.map((fa, index) => (
                    <div key={index} className="flex-shrink-2 min-w-[17rem] py-4 min-h-[20rem]">
                        <LandingPageEventCards event={fa} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default LandingPageEvents
