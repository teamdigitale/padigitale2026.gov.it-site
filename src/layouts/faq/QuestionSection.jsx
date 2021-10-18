import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import {questions} from '../../../contents/faq-page/faq.yml';

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
// const accordions = questions.accordion.map((anchor) => (
//   <LinkListItem size="medium" className="text-decoration-none">
//     <span className={classes.anchorText}>{anchor.sectionTitle}</span>
//   </LinkListItem>
// ));



export const QuestionSection = props => {
  // const classes = useStyles();
  const {title, description, accordions} = props.item;
  console.log('test', props.item);
  const [collapseOpen1, setCollapseOpen1] = useState(true);
  const [collapseOpen2, setCollapseOpen2] = useState(false);
  const [collapseOpen3, setCollapseOpen3] = useState(false);
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Accordion background="active">
        <AccordionHeader
          active={collapseOpen1}
          onToggle={() => setCollapseOpen1(!collapseOpen1)}
        >
          Collapsible Group Item #1
        </AccordionHeader>
        <AccordionBody active={collapseOpen1}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch.
        </AccordionBody>

        <AccordionHeader
          active={collapseOpen2}
          onToggle={() => setCollapseOpen2(!collapseOpen2)}
        >
          Collapsible Group Item #2
        </AccordionHeader>
        <AccordionBody active={collapseOpen2}>
          Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
          farm-to-table, raw denim aesthetic synth nesciunt you probably
          haven&apos;t heard of them accusamus labore sustainable VHS.
        </AccordionBody>

        <AccordionHeader
          active={collapseOpen3}
          onToggle={() => setCollapseOpen3(!collapseOpen3)}
        >
          Collapsible Group Item #3
        </AccordionHeader>
        <AccordionBody active={collapseOpen3}>
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
          sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </AccordionBody>
      </Accordion>
    </div>
  );
};
