import React from 'react';
import Box from '../Box';

const index = ({children, className, onClick, ...rest}) => {
  return (
    <Box
        className={`px-6 py-2 text-white font-bold text-sm rounded-md ${className}`}
        onClick={onClick}
        {...rest}
    >
        {children}
    </Box>
  )
}

export default index