import React, { createClass, PropTypes } from 'react';

const SecondHand = createClass({
  propTypes: {
    seconds: PropTypes.number.isRequired
  },
  render() {
    const {seconds} = this.props;
    const degrees = 6 * parseInt(seconds);
    const styles = {
      transform: `rotate(${degrees}deg) translate(248px, 250px)`
    };
    return(<div className="second-hand" style={styles}/>);
  }
});

export default SecondHand;
