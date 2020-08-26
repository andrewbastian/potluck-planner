import React, { useEffect, useState } from "react";
import axios from 'axios';
import GuestCard from './GuestCard'


export default function Admin() {     
  const [event, setEvents] = useState([]);

  useEffect(() => {   
    const getEvents = () => {
        console.log(axios)
      axios
      .get('https://planthepotluck.herokuapp.com/api/events/all')      
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
           <GuestCard key={key} 
           name={events.eventname} 
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