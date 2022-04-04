import React, { useEffect, useContext } from 'react';
import { AssistenzaPage } from '../../layouts/AssistenzaPage';
import { GlobalStateContext } from '../../context/globalContext';

const Page = (location) => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'supporto' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <AssistenzaPage {...location} />;
};
export default Page;
