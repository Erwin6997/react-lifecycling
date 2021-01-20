import React, { useState } from "react";

function Functioncomponent() {
  // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);

  // Create handleIncrement event handler
    const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    };

  //Create handleDecrement event handler
    const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    };
    return (
    <div>
        <div>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Delete</button>
        </div>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
    );
}

export default Functioncomponent;