import React, { createContext, useContext, useState } from 'react';
import { checkForProvider } from './util';

const LegendStateContext = createContext('');

const LegendUpdateContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});

type LegendProviderProps = { children: React.ReactNode };

export function LegendProvider({ children }: LegendProviderProps) {
  const [legend, setLegend] = useState('');

  return (
    <LegendStateContext.Provider value={legend}>
      <LegendUpdateContext.Provider value={setLegend}>{children}</LegendUpdateContext.Provider>
    </LegendStateContext.Provider>
  );
}

export function useLegendState() {
  const context = useContext(LegendStateContext);

  checkForProvider(context, 'useLegendState', 'LegendProvider');

  return context;
}

export function useLegendUpdate() {
  const context = useContext(LegendUpdateContext);

  checkForProvider(context, 'useLegendUpdate', 'LegendProvider');

  return context;
}
