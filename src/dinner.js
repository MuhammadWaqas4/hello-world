import React from 'react';

function Dinner(props){
    return (
        <div>
            <h1> Today we are serving {props.dishName} </h1>
            <h2> Today we are serving {props.sweetDish} </h2>
        </div> 
    )
} 
export default Dinner;