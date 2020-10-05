import React from 'react';
import 'styled-components/macro';
import { useLegendUpdate } from '../contexts';
import { Functionality } from './index';
import { ControlRow } from './ControlRow';
import { SwapKeysButton } from './SwapKeysButton';
import { letters, modifiers, spacings, symbols } from '../legends-constants';

export function Controls() {
  const setSelectedCharater = useLegendUpdate();

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
            {letter}
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {symbols.map((symbol) => (
          <Functionality key={symbol} onClick={() => setSelectedCharater(symbol)}>
            {symbol}
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {spacings.map((spacing) => (
          <Functionality key={spacing} onClick={() => setSelectedCharater(spacing)}>
            {spacing}
          </Functionality>
        ))}
      </ControlRow>

      <ControlRow>
        {modifiers.map((modifier) => (
          <Functionality key={modifier} onClick={() => setSelectedCharater(modifier)}>
            {modifier}
          </Functionality>
        ))}
      </ControlRow>

      <SwapKeysButton />
    </header>
  );
}
