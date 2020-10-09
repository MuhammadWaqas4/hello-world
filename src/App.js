import React from 'react';
import './App.css';
import Dinner from './dinner.js';
import Brak from './break.js';
import DopaharKaKhana from './lunch.js'

function App() {
  return (
    <div className="App">
      <Dinner dishName ="chicken karahi" sweetDish="Kheer"/>
      <br/>
      <Dinner dishName ="chicken" sweetDish="Halwa Gajjar Ka"/>
      <br/>
      <Brak start="6:00 am" finish="10:00 am"/>
      {/* <Dinner start ="chicken" finish="Halwa"/> */}
      <br/>
      <DopaharKaKhana start = "1:00 pm" end ="4:00 pm"/>
      {/* <Dinner start ="chicken" finish="Halwa"/> */}
      <br/>
      {/* <Dinner dishName ="Chicken BIRyani"/> */}
      {/* <Dinner dishName ="Kabab"/> */}
    </div>
  );
}

export default App;