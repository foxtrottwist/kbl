import React from 'react';
import 'styled-components/macro';

type ControlRowProps = {
  children: React.ReactNode;
};

export function ControlRow({ children }: ControlRowProps) {
  return (
    <div
      css={`
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin-bottom: 1rem;

        text {
          font-size: 1rem;
        }
      `}
    >
      {children}
    </div>
  );
}
