import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times!`; // Component Did Update
    });

    useEffect(() => {
        console.log("Counter has been rendered"); // Component Did Mount
    }, []); // Empty dependency list so it only runs once

    useEffect(() => {
        console.log("Count has changed!"); 
    }, [count]); // Updates w/e count changes

    return (
        <>
            <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count=>count+1)}>
            Click Me!
            </button>
        </>
    );
}

export default Counter;