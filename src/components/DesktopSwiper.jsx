import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Icon } from 'design-react-kit';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { createUseStyles } from 'react-jss';

SwiperCore.use([Pagination, A11y]);

const useStyles = createUseStyles({
  swiperSlide: {
    padding: '0 1.111rem 1.111rem',
    height: 'auto',
  },
  bullet: {
    composes: 'swiper-pagination-bullet p-2',
  },
  activeBullet: {
    composes: 'swiper-pagination-bullet-active',
    backgroundColor: '#0066CC',
  },
  navigationBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    padding: '0',
    '&:focus': {
      outline: 'none',
    },
    '&.swiper-button-disabled': {
      '& svg': {
        opacity: '0.2',
      },
    },
  },
  sidePrevButton: {
    composes: 'd-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  sideNextButton: {
    composes: 'd-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export const DesktopSwiper = ({
  slides,
  breakpoints,
  pagination,
  mobilePagination,
  desktopNavigation,
  navigation,
  className,
}) => {
  const classes = useStyles();
  const [paginationId, setPaginationId] = useState(null);
  const [nextBtnId, setnextBtnId] = useState(null);
  const [prevBtnId, setprevBtnId] = useState(null);

  // The pagination controller doesn't work with SSR, so we need to render it at runtime
  useEffect(() => {
    setPaginationId(`swiper-pagination-${Math.floor(Math.random() * 10000)}`);
    setnextBtnId(`next-navigation-${Math.floor(Math.random() * 10000)}`);
    setprevBtnId(`prev-navigation-${Math.floor(Math.random() * 10000)}`);
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <Swiper
            modules={[Navigation]}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Slide precedente',
              nextSlideMessage: 'Slide successiva',
              firstSlideMessage: 'Questa è la prima slide',
              lastSlideMessage: "Questa è l'ultima slide",
              paginationBulletMessage: 'Vai alla slide {{index}}',
            }}
            className={className}
            breakpoints={breakpoints}
            pagination={{
              el: `[data-swiper-id=${paginationId}]`,
              clickable: true,
              bulletClass: classes.bullet,
              bulletActiveClass: classes.activeBullet,
            }}
            navigation={{
              prevEl: `[data-prev-navigation-id=${prevBtnId}]`,
              nextEl: `[data-next-navigation-id=${nextBtnId}]`,
              hiddenClass: classes.disabledNavBtn,
            }}
          >
            {slides.map((slide, k) => (
              <SwiperSlide className={classes.swiperSlide} key={k}>
                {slide}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {pagination && (
        <div className="mt-4 pb-4 d-flex justify-content-center pt-3">
          {paginationId && (
            <div data-swiper-id={paginationId} className="swiper-pagination" style={{ bottom: 'unset' }}></div>
          )}
        </div>
      )}
      {mobilePagination && (
        <div className="pb-4 d-flex justify-content-center pt-3 d-lg-none">
          {paginationId && (
            <div data-swiper-id={paginationId} className="swiper-pagination" style={{ bottom: 'unset' }}></div>
          )}
        </div>
      )}
      {desktopNavigation && (
        <div className="d-none justify-content-center pt-3 d-lg-flex">
          <button
            className={classes.navigationBtn}
            type="button"
            data-prev-navigation-id={prevBtnId}
            aria-label="Vai alla slide precedente"
          >
            <Icon
              role="img"
              aria-label="Vai alla slide precedente"
              focusable="false"
              color="primary"
              icon="it-arrow-left-circle"
              size="lg"
            />
          </button>
          <button
            className={classes.navigationBtn}
            type="button"
            data-next-navigation-id={nextBtnId}
            aria-label="Vai alla slide successiva"
          >
            <Icon
              role="img"
              aria-label="Vai alla slide successiva"
              focusable="false"
              color="primary"
              icon="it-arrow-right-circle"
              size="lg"
            />
          </button>
        </div>
      )}
      {navigation && (
        <div className="justify-content-center pt-3 d-flex">
          <button
            className={classes.navigationBtn}
            type="button"
            data-prev-navigation-id={prevBtnId}
            aria-label="Vai alla slide precedente"
          >
            <Icon
              role="img"
              aria-label="Vai alla slide precedente"
              focusable="false"
              color="primary"
              icon="it-arrow-left-circle"
              size="lg"
            />
          </button>
          <button
            className={classes.navigationBtn}
            type="button"
            data-next-navigation-id={nextBtnId}
            aria-label="Vai alla slide successiva"
          >
            <Icon
              role="img"
              aria-label="Vai alla slide successiva"
              focusable="false"
              color="primary"
              icon="it-arrow-right-circle"
              size="lg"
            />
          </button>
        </div>
      )}
    </>
  );
};

DesktopSwiper.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
  breakpoints: PropTypes.any,
  pagination: PropTypes.bool,
  mobilePagination: PropTypes.bool,
  desktopNavigation: PropTypes.bool,
  navigation: PropTypes.bool,
  className: PropTypes.any,
};
