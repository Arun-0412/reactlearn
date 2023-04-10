import React, { useState , useEffect } from 'react';

function Hookslearn() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [click, setArun] = useState('Start' );

    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    useEffect(() => {
      setTimeout(() => {
        setCount(count+1);
      },10000);
    });
   
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue" }
      });
    }

  useEffect(() => { // loading lastly after all functions loaded
    console.log('hi');
   
  });

  return (

    // State hooks Start 

    <div>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}. and now it's a my new {setCar.brand = "Audi"}. updated from {car.brand}
        </p>
        <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add Click Count
      </button>
      <button onClick={() => setCount(count - 1)}>
      Delete Click Count
      </button>
      <p>the click text is {click} </p>
      <button onClick={() => setArun('clicked')}>1</button>
    </div>

// State hooks End 

  );
}

export default Hookslearn;
