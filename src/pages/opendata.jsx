import React, { useEffect, useContext } from 'react';
import { OpendataPage } from '../layouts/OpendataPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = () => {
    const [, dispatch] = useContext(GlobalStateContext);

    useEffect(() => {
        dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'opendata' } });
        return () => {
            dispatch({ type: 'SET:ACTIVE_HEADER' });
        };
    }, [dispatch]);
  return <OpendataPage title="Opendata" />;
}
export default Page;
