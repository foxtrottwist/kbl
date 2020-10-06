import React from 'react';
import 'styled-components/macro';
import { SelectedCharaterProvider } from './contexts';
import { Controls, Atreus } from './components';

export default function App() {
  return (
    <div className='App'>
      <SelectedCharaterProvider>
        <Controls />
        <main>
          <Atreus />
        </main>
      </SelectedCharaterProvider>
    </div>
  );
}
