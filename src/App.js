import React from 'react';
import './App.css';
import Dinner from'./dinner'

function App() {
  return (
    <div className="heading" >
      <h1>Hello World from App.js  </h1>
      <p>this is first paragraph</p>

    <Dinner dishName="chiken biryani" sweetDish="kheer" />

    <hr />
    <Dinner dishName="chiken kharayi" sweetDish="custer" />
    
    <hr />
    <Dinner dishName="mutton" sweetDish="lado" />

    </div>
  ); 
}

export default App;
