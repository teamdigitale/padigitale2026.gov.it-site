/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { createContext, useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = { sectionId: null, faqId: null, modalState: false };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET:HOW_SECTION_ID':
      return { ...state, howId: payload?.howId };
    case 'SET:SECTION_OPPORTUNITY_ID':
      return { ...state, sectionId: payload.sectionId };
    case 'SET:FAQ_ID':
      return { ...state, faqId: payload.faqId };
    case 'SET:TOGGLE_MODAL':
      return { ...state, modalState: !state.modalState };
    case 'SET:TOGGLE_MODAL_MESSAGE':
      return { ...state, modalStateMessage: !state.modalStateMessage };
    case 'SET:ACTIVE_HEADER':
      return { ...state, activeItem: payload?.activeItem };
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

GlobalStateContextProvider.propTypes = {
  children: PropTypes.any,
};
