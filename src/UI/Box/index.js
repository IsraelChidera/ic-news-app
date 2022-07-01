import React from 'react';

const index = ({children, className, ...rest}) => {
  return (
    <div
        className={`${className}`}
        {...rest}
    >
        {children}
    </div>
  )
}

export default index