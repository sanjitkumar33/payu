import React from 'react';
import { rem } from '@mantine/core';

const ProfileIcon = ({ size, style, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: rem(size), height: rem(size), ...style }} 
              {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="7"
        r="5"
        className="fill-secondary" // Bootstrap equivalent for color
      />
      <path
        d="M3 19V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19Z"
        className="fill-secondary opacity-75" // Bootstrap equivalent for color and opacity
      />
    </svg>
  );
};

export default ProfileIcon;
