import React, { useEffect, useContext } from 'react';
import { SupportPage } from '../layouts/SupportPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'supporto' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <SupportPage />;
};
export default Page;
