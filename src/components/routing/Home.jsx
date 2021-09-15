import { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Home = () => {
  const [parameter, setParameter] = useState('');

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/parameters/${parameter}`);
  };

  return (
    <>
      <h1>Welcome to React routing!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          My Parameter:
          {' '}
          <input type="text" value={parameter} onChange={(e) => setParameter(e.target.value)} />
          {' '}
          <button type="submit">Submit</button>
        </label>
      </form>
    </>
  );
};

export default Home;
