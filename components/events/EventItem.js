import React from 'react'
import classes from  '../../styles/event-item.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import LocationIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';

const EventItem = ({event}) => {
    const {title, image, id, date, location} = event;
    const readableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
    const formatedLocation = location.replace(', ', '\n');
    console.log(formatedLocation);
    const exploreLink =`/events/${id}`
    return (
        <li className={classes.item}>
            <img  src= {'/'+image} alt = {title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>
                        {title}
                    </h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time >{readableDate}</time>
                    </div>
                    <div  className = {classes.address} >
                        <LocationIcon/>
                        <address>{formatedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button  link={exploreLink}>
                        <span>
                        Explore Event
                        </span>
                        <span className={classes.icon}>
                        <ArrowIcon/>

                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
