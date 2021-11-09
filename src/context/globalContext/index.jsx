import React, { createContext, useReducer, useState, useEffect } from 'react';

const initialState = { sectionId: null, faqId: null };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET:HOW_SECTION_ID':
      return { ...state, howId: payload.howId };
    case 'SET:SECTION_OPPORTUNITY_ID':
      return { ...state, sectionId: payload.sectionId };
    case 'SET:FAQ_ID':
      return { ...state, faqId: payload.faqId };
    default:
      return { ...state };
  }
};

export const GlobalStateContext = createContext(null);
export const GlobalStateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [reactContextDevtool, setReactContextDevtool] = useState();

  useEffect(() => {
    setReactContextDevtool(window._REACT_CONTEXT_DEVTOOL);
  }, []);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {((values) => {
        if (reactContextDevtool && process.env.NODE_ENV === 'development') {
          reactContextDevtool({
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
