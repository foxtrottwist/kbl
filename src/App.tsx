import React from 'react';
import 'styled-components/macro';
import { LegendProvider } from './contexts';
import { Controls, Atreus } from './components';

export default function App() {
  return (
    <div className='App'>
      <LegendProvider>
        <Controls />
        <main>
          <Atreus />
        </main>
      </LegendProvider>
    </div>
  );
}
