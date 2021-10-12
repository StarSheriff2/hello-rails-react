import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  render() {
    return (
      <>
        Greeting:
        {' '}
        {this.props.greeting}
      </>
    );
  }
}

Hello.propTypes = {
  greeting: PropTypes.string,
};
export default Hello;
