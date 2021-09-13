import PropTypes from 'prop-types';

const King = ({nm, cty, yrs, hse}) => {
      return (
        <>
            <h3>{nm}</h3>
            <p>Country: {cty}</p>
            <p>Years: {yrs}</p>
            <p>House: {hse}</p>
        </>
      );
}

King.propTypes = {
    nm: PropTypes.string.isRequired,
    cty: PropTypes.string.isRequired,
    yrs: PropTypes.string.isRequired,
    hse: PropTypes.string.isRequired,
}

export default King;