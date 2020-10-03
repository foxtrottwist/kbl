import React from 'react';
import 'styled-components/macro';
import { useLegendUpdate } from '../contexts';
import { Key, Legend } from './index';
import { ControlRow } from './ControlRow';
import { letters, modifiers, spacings, symbols } from '../legends-constants';

export function Controls() {
  const setSelectedCharater = useLegendUpdate() as React.Dispatch<React.SetStateAction<string>>;

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
      <ControlRow>
        {letters.map((letter) => (
          <Key key={letter} onClick={() => setSelectedCharater(letter)} size='small'>
            <Legend>{letter}</Legend>
          </Key>
        ))}
      </ControlRow>

      <ControlRow>
        {symbols.map((symbol) => (
          <Key key={symbol} onClick={() => setSelectedCharater(symbol)} size='small'>
            <Legend>{symbol}</Legend>
          </Key>
        ))}
      </ControlRow>

      <ControlRow>
        {spacings.map((spacing) => (
          <Key key={spacing} onClick={() => setSelectedCharater(spacing)} size='auto'>
            <Legend>{spacing}</Legend>
          </Key>
        ))}
      </ControlRow>

      <ControlRow>
        {modifiers.map((modifier) => (
          <Key key={modifier} onClick={() => setSelectedCharater(modifier)} size='auto'>
            <Legend>{modifier}</Legend>
          </Key>
        ))}
      </ControlRow>
    </header>
  );
}
