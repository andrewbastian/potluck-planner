import React, { useEffect, useState } from "react";
import axios from 'axios';
import AdminCard from './AdminCard'


export default function Admin(props) {
  const [event, setEvents] = useState([]);


  useEffect(() => {
    const getEvents = () => {
      axios
      .get(`https://planthepotluck.herokuapp.com/api/events/all`)
      .then(res =>{
        console.log('The response data: ', res.data);
        setEvents(res.data);
      })
      .catch(err =>{
        console.log('Can not get events data');
      })
    }
    getEvents();
  }, [])



  return <section >

    {event.map((events, key) => (           
           <AdminCard key={key}
                          eventname={events.eventname}
                          description={events.description}
                          date={events.eventdate}
                          time={events.eventtime}
                          user={events.username}
                          id={events.eventid}
                          location={events.location}
                          />

    ))}


    </section>

}
