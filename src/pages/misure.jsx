import React, { useState, useEffect, useContext} from 'react';
import { OpportunityPage } from '../layouts/OpportunityPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = ({location}) => { 
  const [filter, setFilter] = useState(null);
  const [{}, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    if(location.state !== null) {
      setFilter(location.state.filter);
    }
  }, []);

  useEffect(() => {
    dispatch({type: 'SET:ACTIVE_HEADER', payload: {activeItem: 'misure'}})
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [])
  return (
    <OpportunityPage filter={filter}/>
  )
}
export default Page;
