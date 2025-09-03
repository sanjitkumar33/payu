import React from 'react';
import { rem } from '@mantine/core';

const Logs = ({ size, style,selected, ...props }) => {
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
      <rect
        x="3"
        y="3"
        width="18"
        height="19"
        rx="3"
        className={`${
          selected ? 'bg-primary' : 'bg-light'
        } transition-all`} // Bootstrap classes for selected state
      />
      <path
        d="M14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3H8V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3H14Z"
        className={`${
          selected ? 'bg-primary' : 'bg-secondary'
        } transition-all`} // Bootstrap classes for selected state
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z"
        className={`${
          selected ? 'bg-primary' : 'bg-secondary'
        } transition-all`} // Bootstrap classes for selected state
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15C7 14.4477 7.44772 14 8 14L12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16L8 16C7.44772 16 7 15.5523 7 15Z"
        className={`${
          selected ? 'bg-light' : 'bg-secondary'
        } transition-all`} // Bootstrap classes for selected state
      />
    </svg>
  );
};

export default Logs;
