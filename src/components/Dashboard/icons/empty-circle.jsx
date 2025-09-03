import React from 'react';
import { rem } from '@mantine/core';


export const EmptyCircle = ({ size, style, ...props }) => {
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        style={{ width: rem(size), height: rem(size), ...style }} 
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 8.5C0.5 4.35786 3.85786 1 8 1C12.1421 1 15.5 4.35786 15.5 8.5C15.5 12.6421 12.1421 16 8 16C3.85786 16 0.5 12.6421 0.5 8.5Z"
          stroke="#50545D"
        />
      </svg>
    )
  }