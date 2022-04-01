import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
const Page = () => {
  useEffect(() => {
    navigate('/supporto/domande-frequenti');
  }, []);
  return <></>;
};
export default Page;
