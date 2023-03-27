import React, { useReducer, createContext } from 'react';
import redcucer from './redcucer';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const initialState = {
    articles: [],
  };
  
  const [state, dispatch] = useReducer(redcucer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
