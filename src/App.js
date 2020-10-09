import React, {useState} from 'react';
import './App.css';
// import Dinner from './dinner.js';
// import Brak from './break.js';
// import DopaharKaKhana from './lunch.js'
import {Meage} from './Message.js';

export default function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true); 
  // count = 1; not possible
  // setCount(2);
  return (
    <div className={`box ${isMorning ? 'dayLight' : '' }`} >
      <h1> Have A Good = {isMorning ? 'Morning' : 'Night'}</h1>
      <br/>
      <Meage counter={count}/>
      <br/>
      <h1>Value of Variable Var Counter is: {count}</h1>
       <br/>
       <button onClick={
         ()=> setCount(++count)
         }> 
         Update Counter
         </button>
         <button onClick={
           ()=> setMorning(!isMorning)
         }>
           Update Day
           </button>
       </div>
  );
}

// export default App;