import React, { useEffect, useContext} from 'react';
import { ComeFunzionaPage } from '../layouts/ComeFunzionaPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = () => {
  const [{}, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({type: 'SET:ACTIVE_HEADER', payload: {activeItem: 'come-funziona'}})
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [])
  return (
    <ComeFunzionaPage/>
  )
}
export default Page;
