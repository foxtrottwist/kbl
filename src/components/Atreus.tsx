import React, { useState } from 'react';
import 'styled-components/macro';
import styled from 'styled-components/macro';
import { Key } from './Key';
import { Legend } from './Legend';

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

const BoardHalf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

type AtreusProp = {
  selectedCharater: string | undefined;
  setSelectedCharater: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export function Atreus({ selectedCharater, setSelectedCharater }: AtreusProp) {
  const [left, setLeft] = useState(lhSide);
  const [right, setRight] = useState(rhSide);

  function handleClick(
    column: number,
    key: number,
    legend: string | undefined,
    side: 'left' | 'right'
  ) {
    if (!legend) return;

    if (side === 'left') {
      setLeft(
        left.map((c, i) =>
          i === column ? left[column].map((l, i) => (i === key ? legend : l)) : c
        )
      );
    }

    if (side === 'right') {
      setRight(
        right.map((c, i) =>
          i === column ? right[column].map((l, i) => (i === key ? legend : l)) : c
        )
      );
    }

    setSelectedCharater(undefined);
  }

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: auto;
        width: 65vw;
      `}
    >
      <BoardHalf
        css={`
          transform: rotate(10deg);
        `}
      >
        {left.map((column, columnIndex) => (
          <div
            key={`${column}-${columnIndex}`}
            css={`
              margin-left: 1rem;
            `}
          >
            {column.map((legend, legendIndex) => (
              <Key
                key={`${legend}-${legendIndex}`}
                onClick={() => handleClick(columnIndex, legendIndex, selectedCharater, 'left')}
                size='large'
              >
                <Legend>{legend}</Legend>
              </Key>
            ))}
          </div>
        ))}
      </BoardHalf>

      <BoardHalf
        css={`
          transform: rotate(-10deg);
        `}
      >
        {right.map((column, columnIndex) => (
          <div
            key={`${column}-${columnIndex}`}
            css={`
              margin-right: 1rem;
            `}
          >
            {column.map((legend, legendIndex) => (
              <Key
                key={`${legend}-${legendIndex}`}
                onClick={() => handleClick(columnIndex, legendIndex, selectedCharater, 'right')}
                size='large'
              >
                <Legend>{legend}</Legend>
              </Key>
            ))}
          </div>
        ))}
      </BoardHalf>
    </div>
  );
}
