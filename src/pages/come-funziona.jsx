import React, { useState, useEffect } from 'react';
import { ComeFunzionaPage } from '../layouts/ComeFunzionaPage';

const Page = ({location}) => { 
  const [section, setSection] = useState(null);
  console.log(section);
  
  useEffect(() => {
    if(location.state !== null) {
      setSection(location.state.section);
    }
  }, []);
  return (
    <ComeFunzionaPage section={section}/>
  )
}
export default Page;
