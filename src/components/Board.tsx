import React, { useState } from 'react';
import 'styled-components/macro';

import { Key, Legend } from './index';

type BoardProps = {
  keyMap: string[][];
  side: 'left' | 'right';
  selectedCharater: string | undefined;
  setSelectedCharater: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Board({ keyMap, side, selectedCharater, setSelectedCharater }: BoardProps) {
  const [keys, setKeys] = useState(keyMap);

  function handleClick(column: number, key: number, side: 'left' | 'right') {
    if (!selectedCharater) return;

    if (selectedCharater) {
      const updatedKeys = keys.map((c, i) =>
        i === column ? keys[column].map((l, i) => (i === key ? selectedCharater : l)) : c
      );

      setKeys(updatedKeys);
      setSelectedCharater(undefined);
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
            `}
        >
          {column.map((legend, legendIndex) => (
            <Key
              key={`${legend}-${legendIndex}`}
              onClick={() => handleClick(columnIndex, legendIndex, 'right')}
              size='large'
            >
              <Legend>{legend}</Legend>
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}
