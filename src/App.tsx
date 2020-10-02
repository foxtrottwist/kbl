import React, { useState } from 'react';
import 'styled-components/macro';
import { Controls, ControlRow, Key, Legend, Atreus } from './components';
import { letters, modifiers, spacings, symbols } from './legends-constants';

export default function App() {
  const [selectedCharater, setSelectedCharater] = useState<string | undefined>();

  return (
    <div className='App'>
      <Controls>
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
            <Key key={spacing} onClick={() => setSelectedCharater(spacing)} size='medium'>
              <Legend>{spacing}</Legend>
            </Key>
          ))}
        </ControlRow>

        <ControlRow>
          {modifiers.map((modifier) => (
            <Key key={modifier} onClick={() => setSelectedCharater(modifier)} size='medium'>
              <Legend>{modifier}</Legend>
            </Key>
          ))}
        </ControlRow>
      </Controls>
      <main>
        <Atreus selectedCharater={selectedCharater} setSelectedCharater={setSelectedCharater} />
      </main>
    </div>
  );
}
