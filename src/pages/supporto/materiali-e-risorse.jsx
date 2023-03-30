import React, { useEffect, useContext } from 'react';
import { MaterialiRisorsePage } from '.././../layouts/support/MaterialiRisorse';
import { GlobalStateContext } from '../../context/globalContext';

const Page = () => {
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'supporto' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <MaterialiRisorsePage />;
};
export default Page;
