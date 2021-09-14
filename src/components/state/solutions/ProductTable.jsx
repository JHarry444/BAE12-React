import { useState } from 'react';
import Info from './Info.json';
import Search from './Search';

const ProductTable = () => {
    const [filter, setFilter] = useState("");

    return ( 
        <>
            <Search value={filter} setValue={setFilter}/>
            {
                Info.filter(({title}) => title.toLowerCase().startsWith(filter.toLowerCase()))
                    .map(({id, title}) => <p key={id}>{title}</p>)
            }
        </>
     );
}

export default ProductTable;