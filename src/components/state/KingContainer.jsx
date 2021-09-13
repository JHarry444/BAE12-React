import King from '../King';
import Kings from './Kings.json';

function KingContainer() {

    console.log("KINGS: ", Kings);
    return ( 
        <>
            {
                // Kings.map(king => <King nm={king.nm}  cty={king.cty} hse={king.hse} yrs={king.yrs}/>)
                // Kings.map(({nm, cty, hse, yrs}) => <King nm={nm}  cty={cty} hse={hse} yrs={yrs}/>)
                Kings.map(king => <King key={king.nm + " : " + king.yrs} {...king}/>)
            }
        </>
     );
}

export default KingContainer;