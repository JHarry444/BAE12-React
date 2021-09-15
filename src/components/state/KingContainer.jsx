import axios from 'axios';
import { useEffect, useState } from 'react';
import King from '../King';
// import Kings from './Kings.json';

const KingContainer = () => {
  const [kings, setKings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json')
      .then(({ data }) => setKings(data))
      .catch((err) => setError(err.message));
  }, []); // only runs when component is mounted

  return (
    <>
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      { kings.map(({
        nm, cty, hse, yrs,
      }) => <King key={`${nm} : ${yrs}`} nm={nm} cty={cty} hse={hse} yrs={yrs} />) }
    </>
  );
};

export default KingContainer;
