import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Hello = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.greeting.message );

  const FETCH_GREETING = 'FETCH_GREETING_REQUEST';

  useEffect(() => {
    console.log(FETCH_GREETING);

    // dispatch(fetchGniWorld());
  }, [])

  return (
    <>

      <h1>Greeting: {greeting}</h1>

    </>
  );
}

Hello.propTypes = {
  greeting: PropTypes.string,
};

export default Hello;
