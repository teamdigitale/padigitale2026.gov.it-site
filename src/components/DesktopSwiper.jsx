import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination, A11y } from 'swiper';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { createUseStyles } from 'react-jss';

SwiperCore.use([Pagination, A11y]);

const useStyles = createUseStyles({
  swiperSlide: {
    padding: '0 1.111rem 1.111rem',
  },
  bullet: {
    composes: 'swiper-pagination-bullet p-2',
  },
  activeBullet: {
    composes: 'swiper-pagination-bullet-active',
    backgroundColor: '#0066CC',
  },
});

export const DesktopSwiper = ({ slides, breakpoints, pagination, mobilePagination, className }) => {
  const classes = useStyles();
  const [paginationId, setPaginationId] = useState(null);

  // The pagination controller doesn't work with SSR, so we need to render it at runtime
  useEffect(() => {
    setPaginationId(`swiper-pagination-${Math.floor(Math.random() * 10000)}`);
  }, []);
  console.log(breakpoints);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <Swiper
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
            createElements
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
        <div className="mt-4 pb-4 d-flex justify-content-center pt-3 d-lg-none">
          {paginationId && (
            <div data-swiper-id={paginationId} className="swiper-pagination" style={{ bottom: 'unset' }}></div>
          )}
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
  className: PropTypes.any,
};
