import React from 'react';
import { Carousel } from 'design-react-kit';

import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
  },
});
const carousel = React.createRef();

export const HeroCarousel = ({}) => {
  const classes = useStyles();
  return (
    <>
      <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
        <div className="it-carousel-all owl-carousel" ref={carousel}>
          <div className="it-single-slide-wrapper">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="category-top">
                    <a className="category" href="#">
                      Category
                    </a>
                    <span className="data">10/12/2018</span>
                  </div>
                  <h5 className="card-title big-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <span className="card-signature">di Federico De Paolis</span>
                  <a className="read-more" href="#">
                    <span className="text">Leggi di più</span>
                    <svg className="icon">
                      <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="it-single-slide-wrapper">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="category-top">
                    <a className="category" href="#">
                      Category
                    </a>
                    <span className="data">10/12/2018</span>
                  </div>
                  <h5 className="card-title big-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <span className="card-signature">di Federico De Paolis</span>
                  <a className="read-more" href="#">
                    <span className="text">Leggi di più</span>
                    <svg className="icon">
                      <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="it-single-slide-wrapper">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="category-top">
                    <a className="category" href="#">
                      Category
                    </a>
                    <span className="data">10/12/2018</span>
                  </div>
                  <h5 className="card-title big-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <span className="card-signature">di Federico De Paolis</span>
                  <a className="read-more" href="#">
                    <span className="text">Leggi di più</span>
                    <svg className="icon">
                      <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="it-single-slide-wrapper">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="category-top">
                    <a className="category" href="#">
                      Category
                    </a>
                    <span className="data">10/12/2018</span>
                  </div>
                  <h5 className="card-title big-heading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit…
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <span className="card-signature">di Federico De Paolis</span>
                  <a className="read-more" href="#">
                    <span className="text">Leggi di più</span>
                    <svg className="icon">
                      <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
