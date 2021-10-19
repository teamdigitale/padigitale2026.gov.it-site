import React, { Fragment, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import { questions } from '../../../contents/faq-page/faq.yml';

// const useStyles = createUseStyles({
//   // anchorLink: {
//   //   textDecoration: 'none',
//   // },
//   // anchorText: {
//   //   color: '#0073E6',
//   //   fontWeight: '600',
//   //   fontSize: '18px',
//   // },
// });

export const QuestionSection = (props) => {
  // const classes = useStyles();
  const { title, description, accordions } = props.item;

  // const [collapseOpen0, setCollapseOpen0] = useState(false);
  // const [collapseOpen2, setCollapseOpen2] = useState(false);
  // const [collapseOpen3, setCollapseOpen3] = useState(false);
  const toggleAccordion = (evt) => {
    const isOpen = evt.target.getAttribute('aria-expanded');
    const id = evt.target.getAttribute('data-collapse');
    const wrapper = evt.target.closest('.collapse-div');
    const body = wrapper.querySelector('#' + id);

    
    if (isOpen == 'true') {
      evt.target.classList.remove('collapsed');
      evt.target.setAttribute('aria-expanded', false);
      body.classList.remove('show');
    } else {
      evt.target.classList.add('collapsed');
      evt.target.setAttribute('aria-expanded', true);
      body.classList.add('show');
    }
  };

  const accordionsList = accordions.map((accordion, i) => (
    <>
      <AccordionHeader
        onToggle={(evt) => toggleAccordion(evt)}
        data-collapse={accordion.id}
      >
        {accordion.title}
      </AccordionHeader>
      <AccordionBody id={accordion.id}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch.
      </AccordionBody>
    </>
  ));

  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <Accordion background="active">{accordionsList}</Accordion>
    </>
  );
};
