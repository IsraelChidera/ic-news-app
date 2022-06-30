import React from 'react';
import Box from '../Box';

const index = ({children, className}) => {
  return (
    <Box
        className={`${className}`}    
    >
        {children}
    </Box>
  )
}

export default index