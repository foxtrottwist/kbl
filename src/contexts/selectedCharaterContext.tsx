import React, { createContext, useContext, useState } from 'react';
import { checkForProvider } from './util';

const SelectedCharaterStateContext = createContext('');

const SelectedCharaterUpdateContext = createContext<React.Dispatch<React.SetStateAction<string>>>(
  () => {}
);

type SelectedCharaterProviderProps = { children: React.ReactNode };

export function SelectedCharaterProvider({ children }: SelectedCharaterProviderProps) {
  const [selectedCharater, setSelectedCharater] = useState('');

  return (
    <SelectedCharaterStateContext.Provider value={selectedCharater}>
      <SelectedCharaterUpdateContext.Provider value={setSelectedCharater}>
        {children}
      </SelectedCharaterUpdateContext.Provider>
    </SelectedCharaterStateContext.Provider>
  );
}

export function useSelectedCharaterState() {
  const context = useContext(SelectedCharaterStateContext);

  checkForProvider(context, 'useSelectedCharaterState', 'SelectedCharaterProvider');

  return context;
}

export function useSelectedCharaterUpdate() {
  const context = useContext(SelectedCharaterUpdateContext);

  checkForProvider(context, 'useSelectedCharaterUpdate', 'SelectedCharaterProvider');

  return context;
}
