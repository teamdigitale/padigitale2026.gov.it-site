/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  keypointSectionTitle: {
    fontSize: '1.778rem',
    fontWeight: '700',
    color: '#33485C',
    marginBottom: '1.667rem',
    letterSpacing: '-1px',
    '@media(min-width: 992px)': {
      fontSize: '2.222rem',
      lineHeight: '2.222rem',
    },
  },
  keypointSectionImage: {
    width: '100%',
  },
  keypointSectionLink: {
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
  },
  paragraph: {
    color: '#33485C',
    fontSize: '1.111rem',
    lineHeight: '1.5',
    marginBottom: '30px',
    '@media(min-width: 992px)': {
      fontSize: '1.333rem',
    },
  },
  bgLightBlue: {
    backgroundColor: '#F0F6FC',
  },
  bottomSection: {
    composes: 'offset-lg-4 bottom-section',
    backgroundColor: '#F0F6FC',
    padding: '2rem 0',
    marginTop: '5.556rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    position: 'relative',
  },
  bottomSectionReverse: {
    backgroundColor: '#F0F6FC',
    padding: '2rem 0',
    marginTop: '5.556rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
  },
  keypointBottomSectionImage: {
    height: '165px',
  },
  BottomImgSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '& a': {
      display: 'inline-block',
      marginTop: '15px',
      maxWidth: '250px',
    },
  },
  keypointSection: {
    paddingTop: '5.625rem',
    paddingBottom: '5.625rem',
    '@media (max-width: 991px)': {
      paddingTop: '3.75rem',
      paddingBottom: '3.75rem',
    },
  },
  btnSection: {
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
});

export const KeypointSection = (props) => {
  const classes = useStyle();
  const {
    title,
    number,
    text,
    button,
    image,
    linkLabel,
    reverse,
    lBlue,
    bottomSection,
    BottomImage1,
    BottomImage2,
    BottomLinkLabel1,
    BottomLinkLabel2,
    linkTo,
  } = props.item;

  return (
    <>
      {lBlue ? (
        <div className={classes.bgLightBlue}>
          <Container
            tag="section"
            aria-labelledby="keypoints-section-title"
            className={`${classes.keypointSection} px-3`}
          >
            {!reverse ? (
              <Row>
                <Col xs="12" lg="5" className="offset-lg-1 order-1 order-lg-0">
                  <h4 id={`keypoint-section-title-${number}`} className={classes.keypointSectionTitle}>
                    {title}
                  </h4>
                  <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: text }}></p>
                  {button ? (
                    <Link
                      to={`/come-partecipare/${linkTo}`}
                      color="primary"
                      className={`${classes.btnSection} btn btn-primary`}
                      aria-label={`Dettaglio punto chiave ${number} ${title}`}
                    >
                      SCOPRI DI PIÚ
                    </Link>
                  ) : (
                    ''
                  )}
                  {linkLabel ? (
                    <a href="#" className={classes.keypointSectionLink}>
                      {linkLabel}
                    </a>
                  ) : (
                    ''
                  )}
                </Col>
                <Col
                  xs="8"
                  md="6"
                  lg="4"
                  className="offset-lg-1 mt-3 mt-lg-0 order-0 order-lg-1 mb-5 mb-lg-0 d-lg-flex align-items-center"
                >
                  <img className={classes.keypointSectionImage} src={`/assets/come-fare/${image}`} alt="" />
                </Col>
              </Row>
            ) : (
              <Row>
                <Col
                  xs="8"
                  md="6"
                  lg="4"
                  className="offset-lg-1 mt-3 mt-lg-0 mb-5 mb-lg-0 d-lg-flex align-items-center"
                >
                  <img className={classes.keypointSectionImage} src={`/assets/come-fare/${image}`} alt="" />
                </Col>
                <Col xs="12" lg="5" className="offset-lg-1">
                  <h4 id={`keypoint-section-title-${number}`} className={classes.keypointSectionTitle}>
                    {title}
                  </h4>
                  <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: text }}></p>
                  {button ? (
                    <Link
                      to={`/come-partecipare/${linkTo}`}
                      className={`${classes.btnSection} btn btn-primary`}
                      aria-label={`Dettaglio punto chiave ${number} ${title}`}
                    >
                      SCOPRI DI PIÚ
                    </Link>
                  ) : (
                    ''
                  )}
                  {linkLabel ? (
                    <a href="#" className={classes.keypointSectionLink}>
                      {linkLabel}
                    </a>
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            )}
          </Container>
        </div>
      ) : (
        <Container
          tag="section"
          aria-labelledby={`keypoint-section-title-${number}`}
          className={`${classes.keypointSection} pl-lg-2 pr-lg-2 pl-3 pr-3`}
        >
          {!reverse ? (
            <React.Fragment>
              <Row>
                <Col xs="12" lg="5" className="offset-lg-1 order-1 order-lg-0">
                  <h4 id={`keypoint-section-title-${number}`} className={classes.keypointSectionTitle}>
                    {title}
                  </h4>
                  <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: text }}></p>
                  {button ? (
                    <Link
                      to={`/come-partecipare/${linkTo}`}
                      className={`${classes.btnSection} btn btn-primary`}
                      aria-label={`Dettaglio punto chiave ${number} ${title}`}
                    >
                      SCOPRI DI PIÚ
                    </Link>
                  ) : (
                    ''
                  )}
                  {linkLabel ? (
                    <a href="#" className={classes.keypointSectionLink}>
                      {linkLabel}
                    </a>
                  ) : (
                    ''
                  )}
                </Col>
                <Col
                  xs="8"
                  md="6"
                  lg="4"
                  className="offset-lg-1 mt-3 mt-lg-0 order-0 order-lg-1 mb-5 mb-lg-0 d-lg-flex align-items-center"
                >
                  <img className={classes.keypointSectionImage} src={`/assets/come-fare/${image}`} alt="" />
                </Col>
              </Row>
              {bottomSection ? (
                <Row>
                  <Col xs="12" lg="8" className={classes.bottomSection}>
                    <div className={classes.BottomImgSectionWrapper}>
                      <img
                        className={classes.keypointBottomSectionImage}
                        src={`/assets/come-fare/${BottomImage1}`}
                        alt=""
                      />
                      <a href="#" className={classes.keypointSectionLink}>
                        {BottomLinkLabel1}
                      </a>
                    </div>
                    <div className={classes.BottomImgSectionWrapper}>
                      <img
                        className={classes.keypointBottomSectionImage}
                        src={`/assets/come-fare/${BottomImage2}`}
                        alt=""
                      />
                      <a href="#" className={classes.keypointSectionLink}>
                        {BottomLinkLabel2}
                      </a>
                    </div>
                  </Col>
                </Row>
              ) : (
                ''
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Row>
                <Col
                  xs="8"
                  md="6"
                  lg="4"
                  className="offset-lg-1 mt-3 mt-lg-0 mb-5 mb-lg-0 d-lg-flex align-items-center"
                >
                  <img className={classes.keypointSectionImage} src={`/assets/come-fare/${image}`} alt="" />
                </Col>
                <Col xs="12" lg="5" className="offset-lg-1">
                  <h4 id={`keypoint-section-title-${number}`} className={classes.keypointSectionTitle}>
                    {title}
                  </h4>
                  <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: text }}></p>
                  {button ? (
                    <Link
                      to={`/come-partecipare/${linkTo}`}
                      className={`${classes.btnSection} btn btn-primary`}
                      aria-label={`Dettaglio punto chiave ${number} ${title}`}
                    >
                      SCOPRI DI PIÚ
                    </Link>
                  ) : (
                    ''
                  )}
                  {linkLabel ? (
                    <a href="#" className={classes.keypointSectionLink}>
                      {linkLabel}
                    </a>
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
              {bottomSection ? (
                <Row>
                  <Col xs="12" lg="8" className={classes.bottomSectionReverse}>
                    <div className={classes.BottomImgSectionWrapper}>
                      <img
                        className={classes.keypointBottomSectionImage}
                        src={`/assets/come-fare/${BottomImage1}`}
                        alt=""
                      />
                      <a href="#" className={classes.keypointSectionLink}>
                        {BottomLinkLabel1}
                      </a>
                    </div>
                    <div className={classes.BottomImgSectionWrapper}>
                      <img
                        className={classes.keypointBottomSectionImage}
                        src={`/assets/come-fare/${BottomImage2}`}
                        alt=""
                      />
                      <a href="#" className={classes.keypointSectionLink}>
                        {BottomLinkLabel2}
                      </a>
                    </div>
                  </Col>
                </Row>
              ) : (
                ''
              )}
            </React.Fragment>
          )}
        </Container>
      )}
    </>
  );
};

KeypointSection.propTypes = {
  item: PropTypes.object,
};
