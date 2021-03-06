import React, { useEffect, useContext } from 'react';
import { ComeFunzionaPage } from '../layouts/ComeFunzionaPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'iniziativa' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <ComeFunzionaPage />;
};
export default Page;
