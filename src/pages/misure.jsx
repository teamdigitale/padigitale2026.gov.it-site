import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { OpportunityPage } from '../layouts/OpportunityPage';
import { GlobalStateContext } from '../context/globalContext';
import { selectBeneficiaries } from '../../contents/opportunity-page/opportunity.yml';

const Page = ({ location }) => {
  const [{ sectionId }] = useContext(GlobalStateContext);
  const [filter, setFilter] = useState(null);
  const [, dispatch] = useContext(GlobalStateContext);
  const currentHash = location.hash?.split('#')[1];

  const hashFromSelect = selectBeneficiaries.find((option) => currentHash === option.value);
  useEffect(() => {
    if (!hashFromSelect) {
      if (!sectionId) {
        dispatch({
          type: 'SET:SECTION_OPPORTUNITY_ID',
          payload: { sectionId: currentHash },
        });
      }
    } else {
      const filter = {
        label: '',
        value: '',
      };
      filter.label = hashFromSelect.label;
      filter.value = currentHash;
      setFilter(filter);
    }
  }, [hashFromSelect, sectionId, dispatch, currentHash]);

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
