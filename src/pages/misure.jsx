import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { OpportunityPage } from '../layouts/OpportunityPage';
import { GlobalStateContext } from '../context/globalContext';

const Page = ({ location }) => {
  const [filter, setFilter] = useState(null);
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    if (location.state !== null) {
      setFilter(location.state.filter);
    }
  }, [location.state]);

  useEffect(() => {
    dispatch({ type: 'SET:ACTIVE_HEADER', payload: { activeItem: 'misure' } });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);
  return <OpportunityPage filter={filter} />;
};

Page.propTypes = {
  location: PropTypes.object,
};

export default Page;
