import React from 'react';
import 'styled-components/macro';
import { AtreusBoard } from './AtreusBoard';

const offsets = ['1%', '3.5%', '6%', '2.5%', '-2%', '1.5%'];

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

export function Atreus() {
  return (
    <div
      css={`
        display: flex;
        justify-content: space-around;
        margin: auto;
        width: 65vw;
      `}
    >
      <AtreusBoard keyMap={lhSide} offsets={offsets} side='left' />
      <AtreusBoard keyMap={rhSide} offsets={offsets} side='right' />
    </div>
  );
}
