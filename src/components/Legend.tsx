import React from 'react';
import 'styled-components/macro';

type LegendProps = {
  children: React.ReactNode;
};

export function Legend({ children }: LegendProps) {
  return (
    <span
      css={`
        color: #282c34;
        /* font-size: calc(10px + 2vmin); */
        text-transform: capitalize;
      `}
    >
      {children}
    </span>
  );
}
