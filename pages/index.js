import React from 'react'
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/Event-list';

const HomePage = () => {
const featuredEvents = getFeaturedEvents();
console.log(featuredEvents);
  return (
    <>
      <h1>Homepage</h1>
      <EventList items = {featuredEvents}/>
    </>
  )
}

export default HomePage
