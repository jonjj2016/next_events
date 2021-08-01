import React from 'react'
import Link from 'next/link'

const EventItem = ({event}) => {
    const {title, image, id, date, location} = event;
    const readableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
    return (
        <li>
            <img src= {image} alt="" />
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        <time>{readableDate}</time>
                    </div>
                    <div>
                        <address>Address</address>
                    </div>
                </div>
                <div>
                    <Link href='/'>
                        Explore Event
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
