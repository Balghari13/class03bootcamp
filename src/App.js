import React, {useState} from 'react';
import './App.css';
import {Message} from './Message'
import Dinner from'./dinner'

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false)
  
  return (
    <div  className= {`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Day time = {isMorning ? 'Mornig' : 'Night'}</h1>
      <Message counter={ count }/>
      <br />
      <button onClick={()=> setCount(++count)}>Update counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Set Day</button>
     
     

    <Dinner dishName="chiken biryani" sweetDish="kheer" />

    <hr />
    <Dinner dishName="chiken kharayi" sweetDish="custer" />
    
    <hr />
    <Dinner dishName="mutton" sweetDish="lado" />

    </div>
  ); 
}

export default App; 
