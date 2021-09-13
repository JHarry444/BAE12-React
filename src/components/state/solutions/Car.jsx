import { useState } from "react";

function Car() {
    const [brand, setBrand] = useState("Citreon");

    const [model, setModel] = useState("C1");

    const [colour, setColour] = useState("Blue");

    const [year, setYear] = useState("2009");

    return ( 
        <>
            <label>
                Brand
                <input type="text" name="brand" onChange={e => setBrand(e.target.value)} value={brand}/>
            </label>
            <label>
                Model
                <input type="text" name="model" onChange={e => setModel(e.target.value)} value={model}/>
            </label>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>
        </>
     );
}

export default Car;