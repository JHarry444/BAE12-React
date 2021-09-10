import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(4494);

    const increment = () => setCount(count + 1);
    
    return (
        <>
            <input type="number" readOnly value={count}/>
            <button onClick={increment}>+1</button>
            <p>COUNTER: {new Date().toTimeString()}</p>
        </>
    )
}

export default Counter;