import React from 'react';
import { OpportunityPage } from '../layouts/OpportunityPage';
import { useState, useEffect } from 'react';

const Page = ({location}) => { 
  const [filter, setFilter] = useState(null);
  useEffect(() => {
    if(location.state !== null) {
      setFilter(location.state.filter);
    }
  }, []);
  return (
    <OpportunityPage filter={filter}/>
  )
}
export default Page;
