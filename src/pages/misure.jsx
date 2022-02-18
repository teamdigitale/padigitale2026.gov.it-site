import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { OpportunityPage } from '../layouts/OpportunityPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = ({ location }) => {
  const [{ sectionId }] = useContext(GlobalStateContext);
  const [filter] = useState(null);
  const [, dispatch] = useContext(GlobalStateContext);
  const currentHash = location.hash?.split('#')[1];

  if (!sectionId) {
    dispatch({
      type: 'SET:SECTION_OPPORTUNITY_ID',
      payload: { sectionId: currentHash },
    });
  }

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'misure' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <OpportunityPage filter={filter} hash={currentHash} />;
};

Page.propTypes = {
  location: PropTypes.object,
};

export default Page;
