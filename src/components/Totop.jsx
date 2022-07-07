import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from 'design-react-kit';

const useStyle = createUseStyles({
  totop: {
    position: 'sticky',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    background: '#06c',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '99',
    composes: 'totop',
    cursor: 'pointer',
    top: '35px',
    left: 'calc(100% - 80px)',
    marginRight: '-75px',
    '@media (max-width: 1099px)': {
      marginRight: '0',
    },
    '@media (max-width: 991px)': {
      top: '85px',
      marginTop: '40px',
    },
  },
});

export const Totop = () => {
  useEffect(() => {
    const sectionsContainer = document.querySelector('.timeline-vertical');

    if (sectionsContainer) {
      const scrollIndicatorHandler = () => {
        const timelineYpos = sectionsContainer.getBoundingClientRect();
        let top = timelineYpos.top;
        let bottom = timelineYpos.bottom;
        if (top <= '100' && bottom >= '700') {
          const sectionsContainerHeight = sectionsContainer.getBoundingClientRect().height;
          const scrollIndicator = sectionsContainer.querySelector('.scroll-indicator-active');
          if (top < 0) {
            top = top * -1;
          }
          if (bottom < 0) {
            bottom = bottom * -1;
          }
          const partialValue = bottom - top;
          const percentageScroll = 100 - (100 * partialValue) / sectionsContainerHeight;
          scrollIndicator.style.height = `${percentageScroll}%`;
        }
      };
      window.addEventListener('scroll', scrollIndicatorHandler);
    }
  }, []);
  const classes = useStyle();

  const totopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={classes.totop} onClick={totopHandler}>
        <Icon className="icon" color="white" icon="it-arrow-up" size="" />
      </div>
    </>
  );
};
