import { useEffect, useState } from "react";

function CounterChild({ startCount }) {
    const [count, setCount] = useState(startCount);

    useEffect(() => {
        document.title = `Clicked ${count} times!`; // Component Did Update
    });
    
    return ( 
        <>
            <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count=>count+1)}>
            Click Me!
            </button>
        </>
     );
}

export default CounterChild;