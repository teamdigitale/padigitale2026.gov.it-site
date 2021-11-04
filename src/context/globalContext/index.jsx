import React, { createContext, useReducer } from 'react';

const initialState = {sectionId: null};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET:SECTION_ID':
      return { ...state, sectionId: payload.sectionId };
    default:
      return { ...state };
  }
};

export const GlobalStateContext = createContext(null);
export const GlobalStateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {((values) => {
        if (
          window._REACT_CONTEXT_DEVTOOL &&
          process.env.NODE_ENV === 'development'
        ) {
          window._REACT_CONTEXT_DEVTOOL({
            id: 'GlobalStateContext',
            displayName: 'GlobalStateContext',
            values,
          });
        }
      })()}

      {children}
    </GlobalStateContext.Provider>
  );
};
