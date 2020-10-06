import React, { useState } from 'react';
import 'styled-components/macro';
import { useSelectedCharaterUpdate } from '../contexts';
import { Key } from './Key';

type AtreusBoardProps = {
  keyMap: string[][];
  offsets: string[];
  side: 'left' | 'right';
};

export function AtreusBoard({ keyMap, offsets, side }: AtreusBoardProps) {
  const { handleKeyChange } = useSelectedCharaterUpdate();
  const [keys, setKeys] = useState(keyMap);

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        align-items: end;
        transform: ${side === 'left' ? `rotate(10deg)` : `rotate(-10deg)`};
      `}
    >
      {keys.map((column, columnIndex) => (
        <div
          key={`${column}-${columnIndex}`}
          css={`
                margin-${side}: 1rem;
                margin-bottom: ${side === 'left' ? offsets[columnIndex] : offsets[5 - columnIndex]};
              `}
        >
          {column.map((legend, legendIndex) => (
            <Key
              key={`${legend}-${legendIndex}`}
              legend={legend}
              onClick={() => handleKeyChange(columnIndex, legendIndex, keys, setKeys)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
