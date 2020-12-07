import React, { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    };

    const decrement = () => {
        // setCounter(counter - 1)
        setCounter(c => c - 1)
    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}