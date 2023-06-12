import React, { useEffect, useContext } from 'react';
import { FaqPageNew } from '../../layouts/FaqPage';
import { GlobalStateContext } from '../../context/globalContext';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'supporto' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <FaqPageNew />;
};
export default Page;
