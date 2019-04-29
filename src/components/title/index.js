import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Title = ({ weight, text }) =>
  weight === 1 ? (
    <h1 className='appTitle'>{text}</h1>
  ) : (
    <h2 className='appTitle'>{text}</h2>
  );

Title.defaultProps = {
  weight: 1
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  weight: PropTypes.oneOf([1, 2]).isRequired
};

export default Title;
