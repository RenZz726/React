import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrement] = useState(1);
    function increment() {
        setCount(count + incrementBy);
    }
    function decrement() {
        setCount(count - incrementBy);
    }
    function setIncrementBy() {
        setIncrement(incrementBy + 1);
    }
    function setDecrementBy() {
        setIncrement(incrementBy - 1);
    }
    return (
        <div>
            <h1>The value is: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h1>We are incrementing the value by: {incrementBy}</h1>
            <button onClick={setIncrementBy}>Increment</button>
            <button onClick={setDecrementBy}>Decrement</button>

        </div>
    );
}