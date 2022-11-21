import React from 'react';
import { OpendataPage } from '../layouts/OpendataPage';

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
