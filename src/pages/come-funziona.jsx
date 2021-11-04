import React, { useContext } from 'react';
import { ComeFunzionaPage } from '../layouts/ComeFunzionaPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = () => {
  const [{sectionId}] = useContext(GlobalStateContext)
  return (
    <ComeFunzionaPage section={sectionId}/>
  )
}
export default Page;
