import React from 'react';
import PropType from 'prop-types';

import './index.css'

const Button = ({ children, action, cssStyle }) => (
  <button className={cssStyle} onClick={action}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropType.any.isRequired,
  cssStyle: PropType.string.isRequired,
  action: PropType.func.isRequired
}

export default Button;