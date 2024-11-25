import React, { useState, useEffect } from "react";
import EventDetailsPopup from "./EventDetailsPopup";
import { jwtDecode } from "jwt-decode";

const EventCard = ({ event, onFavoriteToggle }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const currentDate = new Date();

  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const theId =
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
  const userId = decodedToken[theId];
  const addEventToUserEndpoint = `https://localhost:7261/api/User/${userId}/event`;

  const futureDates = event.dates.filter(
    (date) => new Date(date) > currentDate
  );

  const handleFavoriteToggle = async () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(event.id, !isFavorite); // Optionally, notify parent component

    const eventToAdd = {
      eventId: event.eventId, // Use event's ID
      category: event.category, // Use event's category
      title: event.title, // Use event's title
      description: event.description, // Use event's description
      imageUrl: event.imageUrl, // Use event's image URL
      apiEventUrlPage: event.apiEventUrlPage, // Use event's URL
      eventUrlPage: event.eventUrlPage, // Use event's page URL
      date: event.dates[0], // Use the first date in the dates array
      ticketsRelease: event.ticketsRelease, // Use event's ticket release
      highestPrice: event.highestPrice, // Use event's highest price
      lowestPrice: event.lowestPrice, // Use event's lowest price
      venue: {
        name: event.venue.name, // Use venue's name
        address: event.venue.address, // Use venue's address
        zipCode: event.venue.zipCode, // Use venue's zip code
        city: event.venue.city, // Use venue's city
        locationLat: event.venue.locationLat, // Use venue's latitude
        locationLong: event.venue.locationLong, // Use venue's longitude
      },
    };

    try {
      const response = await fetch(addEventToUserEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventToAdd),
      });

      if (!response.ok) {
        throw new Error("Failed to add event");
      }
      console.log("Event successfully added to user");
    } catch (error) {
      console.error("error adding event to use", error);
    }
  };

  const dateDisplay =
    futureDates.length > 1
      ? `${new Date(futureDates[0]).toLocaleString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })},    flera datum`
      : new Date(futureDates[0]).toLocaleString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        });

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]); // Add isPopupOpen as a dependency

  const handleDetailsClick = () => {
    console.log(
      "Details clicked for",
      event.title,
      "with ID:",
      event.eventId,
      event.lowestPrice,
      event
    );
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="mt-8 m-auto flex-col w-5/6 max-w-full bg-Flesh border border-gray-200 rounded-lg shadow dark:purpleDark dark:border-gray-700 font-quicksand">
      <a href="#">
        <img
          className="rounded-t-lg object-cover w-full"
          src={event.imageUrl}
          alt="official event image"
        />
      </a>
      <div className="p-5 ">
        <p className="mb-3 font-quicksand text-black-700 dark:text-black-400">
          {dateDisplay}
        </p>
        <a href="#">
          <h6 className="mb-2 text-2xl font-bebas tracking-tight text-gray-900 dark:text-white">
            {event.title}
          </h6>
        </a>
        <p className="mb-4">
          {event.venue.name} {event.venue.city}
        </p>
        <div className="flex flex-row justify-between">
          <button
            onClick={handleDetailsClick}
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-Purple rounded-lg hover:bg-BrightOrange focus:ring-4 focus:outline-none focus:ring-BrightOrange dark:bg-Purple dark:hover:bg-BrightOrange dark:focus:ring-BrightOrange"
          >
            Detaljer
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button onClick={handleFavoriteToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFavorite ? "yellow" : "none"} // Fill the star with yellow if favorite
              stroke={isFavorite ? "yellow" : "black"} // Outline the star in yellow if favorite
              strokeWidth="2"
              className="w-6 h-6 cursor-pointer"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <EventDetailsPopup event={event} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default EventCard;
