import React from "react";
import { Card } from 'semantic-ui-react';
import styled from 'styled-components'


const Description = styled.div`
width: 100%;
`

const Header = styled.div`
font-size: 20px;
font-weight: 900;
display: flex;
justify-content: center;
`
const Content = styled.div`
width: 100%;
margin: 20px;
display: flex;
`
const Meta = styled.div`
display: flex;
justify-content: center;
`

export default function AdminCard(props) { 
    
    const {name, description, date, time, user, id, location} = props;

    return (
      <div>
        
      <div>      
        <Card className="card">  
          <Header>{name}</Header>      
        <Content>          
          <Meta>{date} {time}</Meta>
          <Description> 
              Location: {location}             
        </Description>  

        <Description>                
              Created By: {user}              
        </Description>

        <Description>               
              Event Number: {id}
        </Description>  

         <Description>               
              Description: {description}
        </Description> 
        
    </Content>
  </Card>
  </div>
  </div>
  )
};
