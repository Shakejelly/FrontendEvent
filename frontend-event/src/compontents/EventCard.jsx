import React from 'react'

const EventCard = ({ event }) => {
    return (
        <div className="max-w-xs my-5 bg-Flesh border border-gray-200 rounded-lg shadow dark:purpleDark dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <p className="mb-3 font-normal text-black-700 dark:text-black-400">{event.eventDate}</p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.eventName}</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-DarkPurple rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:purpleContrast dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default EventCard
