import React, { useEffect, useState, useRef } from 'react';
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

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const endOfPageRef = useRef();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
      console.log(response.data);
      setEvents(prevEvents => [...prevEvents, ...response.data.events]);
      setPage(prevPage => prevPage + 1);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (loading) return;
    if (endOfPageRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div>
      <h1 className='font-bold text-xl ml-10 mt-10'>Upcoming Events</h1>
      <EventCardList events={events} />
      {loading && <div>Loading...</div>}
      <div ref={endOfPageRef}></div>
    </div>
  );
};

export default UpcomingEvents;
