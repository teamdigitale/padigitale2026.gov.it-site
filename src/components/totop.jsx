import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({});

export const Totop = () => {
  const classes = useStyle();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const totop = document.querySelector('.back-to-top');
      if (window.scrollY > 0) {
        totop.classList.add('back-to-top-show');
      } else {
        totop.classList.remove('back-to-top-show');
      }
    });
  }, []);
  return (
    <>
      <a href="#" aria-hidden="true" data-attribute="back-to-top" className="back-to-top back-to-top-small shadow">
        <Icon color="white" icon="it-arrow-up" />
      </a>
    </>
  );
};

Totop.propTypes = {};
