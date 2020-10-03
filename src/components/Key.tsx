import React from 'react';
import 'styled-components/macro';

type KeyProps = {
  legend: string;
  onClick: ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void) | undefined;
};

export function Key({ legend, onClick }: KeyProps) {
  return (
    <span
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
        border-style: solid;
        border-color: #282c34;
        border-radius: 4.5%;
        cursor: pointer;
        height: 5rem;
        width: 5rem;
        margin-bottom: 1rem;
        border-width: 2px;
      `}
      onClick={onClick}
    >
      <span
        css={`
          color: #282c34;
          text-transform: capitalize;
        `}
      >
        {legend}
      </span>
    </span>
  );
}
