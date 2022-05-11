/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Icon } from 'design-react-kit';
import { ExternalLink } from '../../components/ExternalLink';
import {
  bottomBannerText,
  bottomBannerExtLink,
} from '../../../contents/support-page/support.yml';

const useStyle = createUseStyles({
  supportBanner: {
    fontSize: '0.9rem',
    padding: '0 0 1rem 0',
    '@media (min-width: 992px)': {
      padding: '0 0 1rem 0',
    },
    '& .text': {
      color: '#33485C',
      paddingBottom: '1rem',
    },
    '& a': {
      color: '#33485C',
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  externalLinkImage: {
    marginTop: '-5px',
    marginLeft: '12px',
  },
});

export const SupportBanner = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.supportBanner}>
        <section className="container px-3">
          <Row>
            <Col xs="12" lg="5"></Col>
            <Col xs="12" lg="7">
              <hr />
              <span
                className="text d-block text-center text-md-left"
                dangerouslySetInnerHTML={{ __html: bottomBannerText }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" lg="5"></Col>
            <Col xs="12" lg="7">
              <ExternalLink
                className="text d-block text-center text-md-left"
                linkTo={bottomBannerExtLink.linkTo}
                alt=""
                ariaLabel={`${bottomBannerExtLink.text} (Collegamento sito esterno apre su nuova scheda)`}
              >
                {bottomBannerExtLink.text}
                <Icon
                  size="sm"
                  className={classes.externalLinkImage}
                  icon="it-external-link"
                />
              </ExternalLink>
            </Col>
          </Row>
        </section>
      </div>
    </React.Fragment>
  );
};
