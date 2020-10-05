import React, { useState } from 'react';
import 'styled-components/macro';
import { useLegendState, useLegendUpdate } from '../contexts';
import { Key } from './Key';

type AtreusBoardProps = {
  keyMap: string[][];
  offsets: string[];
  side: 'left' | 'right';
};

export function AtreusBoard({ keyMap, offsets, side }: AtreusBoardProps) {
  const setSelectedCharater = useLegendUpdate();
  const selectedCharater = useLegendState();
  const [keys, setKeys] = useState(keyMap);

  function handleClick(column: number, key: number) {
    if (!selectedCharater) return;

    if (selectedCharater) {
      const updatedKeys = keys.map((c, i) =>
        i === column ? keys[column].map((l, i) => (i === key ? selectedCharater : l)) : c
      );

      setKeys(updatedKeys);
      setSelectedCharater('');
    }
  }

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
              onClick={() => handleClick(columnIndex, legendIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
