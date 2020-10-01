import React from 'react';
import 'styled-components/macro';

type ControlsProps = {
  children: React.ReactNode;
};

export function Controls({ children }: ControlsProps) {
  return (
    <header
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        min-height: 30vh;
      `}
    >
      {children}
    </header>
  );
}
