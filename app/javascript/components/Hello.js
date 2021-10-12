import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGreeting } from '../redux/greeting/greeting';

const Hello = () => {
  const dispatch = useDispatch();

  const greeting = useSelector((state) => state.greeting.message );

  useEffect(() => {
    dispatch(fetchGreeting());
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
