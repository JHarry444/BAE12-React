const King = () => {
    const king = {
        nm: 'Barry',
        ctry: 'Coventry',
        yrs: 1066,
        hse: 'Brick'
      }

      return (
        <>
            <h3>{king.nm}</h3>
            <p>Country: {king.ctry}</p>
            <p>Years: {king.yrs}</p>
            <p>House: {king.hse}</p>
        </>
      );
}

export default King;