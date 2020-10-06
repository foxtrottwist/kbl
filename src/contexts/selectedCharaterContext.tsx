import React, { createContext, useContext, useState } from 'react';
import { checkForProvider } from './util';

const SelectedCharaterStateContext = createContext('');

type Scuc = {
  handleKeyChange: (
    column: number,
    key: number,
    charaterMap: string[][],
    mapUpdater: React.Dispatch<React.SetStateAction<string[][]>>
    // selectedCharater: string,
  ) => void;
  setSelectedCharater: React.Dispatch<React.SetStateAction<string>>;
};

const SelectedCharaterUpdateContext = createContext<Scuc>({
  handleKeyChange: () => {},
  setSelectedCharater: () => {},
});

type SelectedCharaterProviderProps = { children: React.ReactNode };

export function SelectedCharaterProvider({ children }: SelectedCharaterProviderProps) {
  const [selectedCharater, setSelectedCharater] = useState('');

  function handleKeyChange(
    column: number,
    key: number,
    charaterMap: string[][],
    mapUpdater: React.Dispatch<React.SetStateAction<string[][]>>
    // selectedCharater: string,
  ) {
    if (!selectedCharater) return;

    if (selectedCharater) {
      const updatedKeys = charaterMap.map((c, i) =>
        i === column ? charaterMap[column].map((l, i) => (i === key ? selectedCharater : l)) : c
      );

      mapUpdater(updatedKeys);
      setSelectedCharater('');
    }
  }

  return (
    <SelectedCharaterStateContext.Provider value={selectedCharater}>
      <SelectedCharaterUpdateContext.Provider value={{ handleKeyChange, setSelectedCharater }}>
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
