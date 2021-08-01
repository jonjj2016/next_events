import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data';

const EventDetail = () => {
    const {query} = useRouter();
    // const [state, setState] = useState({})
    // useEffect(()=>{
    //     setState(getEventById(query.eventId))
    // },[query.eventId]);
    const event = getEventById(query.eventId)
    console.log("event",event);
    // console.log(state);
    return (
        <div>
            EventDetail
        </div>
    )
}

export default EventDetail
