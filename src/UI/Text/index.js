import React from 'react';
import Box from '../Box';

const index = ({children, className, ...rest}) => {
  return (
    <Box
      className={`${className}`}  
      {...rest}  
    >
      {children}
    </Box>
  )
}

export default index