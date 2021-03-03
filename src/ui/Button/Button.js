import React from 'react';
const Button = ({ className, children, ...rest }) => {
  return (
    <button className={className} {...rest}>
      <span>{children}</span>
    </button>
  )
}

export default Button;