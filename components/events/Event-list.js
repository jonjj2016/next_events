import React from 'react';
import EventItem from './EventItem';

const EventList = ({ items }) => {

    return (
        <ul>
            <h1>
                Event List
            </h1> 
            {items.map(item => <li key={item.id}><EventItem event={ item }/></li>)}
        </ul>
    )
}

export default EventList
