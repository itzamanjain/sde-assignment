import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" height={60} width={60} src={event.imgUrl} alt={event.eventName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.eventName}</div>
        <p className="text-gray-700 text-base">{event.cityName}</p>
        <p className="text-gray-700 text-base">{event.date}</p>
        <p className="text-gray-700 text-base">{event.weather}</p>
        <p className="text-gray-700 text-base">{event.distanceKm} km away</p>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    imgUrl: PropTypes.string,
    eventName: PropTypes.string,
    cityName: PropTypes.string,
    date: PropTypes.string,
    weather: PropTypes.string,
    distanceKm: PropTypes.string
  }).isRequired
};

const EventCardList = ({ events }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

EventCardList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

const RecommendShow = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
        console.log(response.data);
        setEvents(response.data.events); // Set only the events array to state
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      
      <EventCardList events={events} />
    </div>
  );
};

export default RecommendShow;
