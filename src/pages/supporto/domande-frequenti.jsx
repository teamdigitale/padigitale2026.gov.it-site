import React, { useEffect, useContext } from 'react';
import { FaqPage } from '../../layouts/FaqPage';
import { GlobalStateContext } from '../../context/globalContext';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'supporto' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <FaqPage />;
};
export default Page;
