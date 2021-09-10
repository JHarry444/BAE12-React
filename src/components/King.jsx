import PropTypes from 'prop-types';

const King = ({nm, ctry, yrs, hse}) => {
      return (
        <>
            <h3>{nm}</h3>
            <p>Country: {ctry}</p>
            <p>Years: {yrs}</p>
            <p>House: {hse}</p>
        </>
      );
}

King.propTypes = {
    nm: PropTypes.string.isRequired,
    ctry: PropTypes.string.isRequired,
    yrs: PropTypes.string.isRequired,
    hse: PropTypes.string.isRequired,
}

export default King;