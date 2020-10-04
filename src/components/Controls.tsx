import React from 'react';
import 'styled-components/macro';
import { useLegendUpdate } from '../contexts';
import { Functionality, Legend } from './index';
import { ControlRow } from './ControlRow';
import { SwapKeysButton } from './SwapKeysButton';
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
          <Functionality key={letter} onClick={() => setSelectedCharater(letter)}>
            <Legend>{letter}</Legend>
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {symbols.map((symbol) => (
          <Functionality key={symbol} onClick={() => setSelectedCharater(symbol)}>
            <Legend>{symbol}</Legend>
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {spacings.map((spacing) => (
          <Functionality key={spacing} onClick={() => setSelectedCharater(spacing)}>
            <Legend>{spacing}</Legend>
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {modifiers.map((modifier) => (
          <Functionality key={modifier} onClick={() => setSelectedCharater(modifier)}>
            <Legend>{modifier}</Legend>
          </Functionality>
        ))}
      </ControlRow>

      <SwapKeysButton />
    </header>
  );
}
