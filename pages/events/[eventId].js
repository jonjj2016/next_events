import React, { useEffect, useState , Fragment} from 'react';
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data';
import EventSummary from './../../components/event-detail/event-summary';
import EventLogistics from './../../components/event-detail/event-logistics';
import EventContent from './../../components/event-detail/event-content';

const EventDetail = () => {
    const {query} = useRouter();
    // const [state, setState] = useState({})
    // useEffect(()=>{
    //     setState(getEventById(query.eventId))
    // },[query.eventId]);
    const event = getEventById(query.eventId)
    // console.log(state);
    if(!event){
        return <p>loading...</p>
    }
    return (
        <Fragment>
           <EventSummary title={event?event.title:''}/>
                <EventLogistics event={event}/>
                <EventContent>
                    {event.description}
                </EventContent>
        </Fragment>
    )
}

export default EventDetail
