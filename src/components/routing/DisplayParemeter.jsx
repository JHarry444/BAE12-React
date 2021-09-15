import { useParams } from 'react-router-dom';

function DisplayParameter() {
  const { myParameter } = useParams();

  return (
    <p>
      Your parameter was:
      {' '}
      {myParameter}
    </p>
  );
}

export default DisplayParameter;
