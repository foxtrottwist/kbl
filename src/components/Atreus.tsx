import React from 'react';
import 'styled-components/macro';
import { Board } from './index';

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
