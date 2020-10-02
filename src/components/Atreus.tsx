import React, { useState } from 'react';
import 'styled-components/macro';
import { Key, Legend } from './index';

const offsets = ['1%', '3.5%', '6%', '2.5%', '0%', '1.5%'];

const lhSide = [
  ['q', 'a', 'z', 'esc'],
  ['w', 's', 'x', 'tab'],
  ['e', 'd', 'c', 'cmd'],
  ['r', 'f', 'v', 'shift'],
  ['t', 'g', 'b', 'bksp'],
  ['`', 'ctrl'],
];

const rhSide = [
  ['\\', 'alt'],
  ['y', 'h', 'n', 'space'],
  ['u', 'j', 'm', 'fun'],
  ['i', 'k', ',', '-'],
  ['o', 'l', '.', "'"],
  ['p', ';', '/', 'enter'],
];

type AtreusProps = {
  selectedCharater: string | undefined;
  setSelectedCharater: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Atreus({ selectedCharater, setSelectedCharater }: AtreusProps) {
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 65vw;
      `}
    >
      <Board
        keyMap={lhSide}
        selectedCharater={selectedCharater}
        setSelectedCharater={setSelectedCharater}
        side='left'
      />

      <Board
        keyMap={rhSide}
        selectedCharater={selectedCharater}
        setSelectedCharater={setSelectedCharater}
        side='right'
      />
    </div>
  );
}

type BoardProps = {
  keyMap: string[][];
  side: 'left' | 'right';
  selectedCharater: string | undefined;
  setSelectedCharater: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Board({ keyMap, side, selectedCharater, setSelectedCharater }: BoardProps) {
  const [keys, setKeys] = useState(keyMap);

  function handleClick(column: number, key: number) {
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
              margin-bottom: ${side === 'left' ? offsets[columnIndex] : offsets[5 - columnIndex]};
            `}
        >
          {column.map((legend, legendIndex) => (
            <Key
              key={`${legend}-${legendIndex}`}
              onClick={() => handleClick(columnIndex, legendIndex)}
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
