/* eslint-disable sonarjs/prefer-object-literal */
/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import faq from '../../contents/faq-page/faq.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/faq-page/faq.yml';
import { Totop } from '../components/Totop';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { HeroSupport } from './support/Hero';

const { title: seoTitle, description: seoDescription } = seo.faqPage;

const useStyles = createUseStyles({
  noResults: {
    textAlign: 'center',
    color: '#33485C',
    margin: '0.833rem 0',
  },
  inputContainer: {
    position: 'relative',
    '& .reset-btn': {
      background: 'transparent',
      border: '0',
      position: 'absolute',
      top: '15px',
      right: '10px',
      backgroundImage: 'url("../assets/close-black.svg")',
      backgroundRepeat: 'no-repeat',
      width: '1.1rem',
      height: '1.1rem',
    },
    '& label': {
      fontWeight: '400',
    },
  },
  inputWrap: {
    backgroundImage: 'url("../assets/icon-search.svg")',
    '&:focus': {
      outline: '2px solid #ff9900',
    },
  },
  sidenav: {
    '@media (max-width: 991px)': {
      position: 'sticky',
      top: '0',
      zIndex: '2',
      background: '#fff',
      padding: '0',
      marginBottom: '20px',
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [filterId, setFilterId] = useState('all');
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState();
  const [questNum, setquestNum] = useState(countInitQuestions());
  const [search, setSearch] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
    announce('Pagina caricata ' + faq.name);
  }, []);

  function countInitQuestions() {
    let count = 0;
    faq.questions.forEach((element) => {
      count += element.accordions.length;
    });
    return count;
  }

  function countQuestions() {
    let count = 0;
    const questionList = document.querySelectorAll('#id-list-faq section');
    if (questionList) {
      questionList.forEach((element) => {
        const list = element.querySelector('.collapse-div');
        if (list) {
          count += list.childElementCount;
        }
      });
    }
    return count;
  }

  const handleChange = (event) => {
    setSearch(search + 1);
    const value = event.target.value;
    const tagListArr = document.querySelectorAll('.tags-container');
    tagListArr.forEach((tagList) => {
      if (value !== '') {
        tagList.classList.add('d-none');
      } else {
        tagList.classList.remove('d-none');
      }
    });
    setInputValue(value);
    if (value.length >= 3) {
      if (isMobile && filterId !== 'all') {
        const mobileGroup = getQuestionsMobile(getNewQuestions(value));
        const filteredMobileGroup = JSON.parse(JSON.stringify(mobileGroup)).map((group) =>
          group.accordions.filter((accordion) => {
            if (
              accordion.title?.toLowerCase().includes(value.toLowerCase()) ||
              accordion.content?.toLowerCase().includes(value.toLowerCase()) ||
              accordion.linkLabel?.toLowerCase().includes(value.toLowerCase())
            ) {
              return accordion;
            }
          })
        );
        setQuestions(filteredMobileGroup);
      } else {
        const group = getNewQuestions(value);
        const filteredGroup = JSON.parse(JSON.stringify(group)).map((g) => {
          g.accordions = g.accordions.filter((accordion) => {
            if (
              accordion.title?.toLowerCase().includes(value.toLowerCase()) ||
              accordion.content?.toLowerCase().includes(value.toLowerCase()) ||
              accordion.linkLabel?.toLowerCase().includes(value.toLowerCase())
            ) {
              return accordion;
            }
          });
          g.accordions = g.accordions.map((accordion) => {
            const valueLength = value.length;
            if (accordion.title?.toLowerCase().includes(value.toLowerCase())) {
              const index = accordion.title.toLowerCase().indexOf(value.toLowerCase());
              const foundText = accordion.title.substring(index, index + valueLength);
              accordion.title = accordion.title?.replaceAll(foundText, `<mark>${foundText}</mark>`);
            }
            if (accordion.content?.toLowerCase().includes(value.toLowerCase())) {
              const index = accordion.content.toLowerCase().indexOf(value.toLowerCase());
              const foundText = accordion.content.substring(index, index + valueLength);
              accordion.content = accordion.content?.replaceAll(foundText, `<mark>${foundText}</mark>`);
            }
            if (accordion.linkLabel?.toLowerCase().includes(value.toLowerCase())) {
              const index = accordion.linkLabel.toLowerCase().indexOf(value.toLowerCase());
              const foundText = accordion.linkLabel.substring(index, index + valueLength);
              accordion.linkLabel = accordion.linkLabel?.replaceAll(foundText, `<mark>${foundText}</mark>`);
            }
            return accordion;
          });
          return g;
        });
        setQuestions(filteredGroup);
      }
    } else {
      if (isMobile) {
        filterId !== 'all' ? setQuestions(getQuestionsMobile(faq.questions)) : setQuestions(faq.questions);
      } else {
        setQuestions(faq.questions);
      }
    }
    setquestNum(countQuestions());
    if (questions.length === 0) {
      announce('Nessun risultato');
    } else {
      announce('Numero di FAQ in pagina aggiornato');
    }
  };

  function getAccordionsFiltered(question, input) {
    return question.accordions.filter((accordion) => {
      if (
        accordion.title?.toLowerCase().includes(input.toLowerCase()) ||
        accordion.content?.toLowerCase().includes(input.toLowerCase()) ||
        accordion.linkLabel?.toLowerCase().includes(input.toLowerCase())
      ) {
        return accordion;
      }
    });
  }

  function getNewQuestions(inputValue) {
    const newQuest = [];
    faq.questions.forEach((question) => {
      if (getAccordionsFiltered(question, inputValue).length) {
        newQuest.push(question);
      }
    });
    return newQuest;
  }

  function getQuestionsMobile(items) {
    const filteredQuestions = [];
    items.forEach((question) => {
      if (question.sectionId === filterId) {
        filteredQuestions.push(question);
      }
    });
    return filteredQuestions;
  }

  useEffect(() => {
    if (!isMobile) {
      setInputValue('');
      setQuestions(faq.questions);
    }
  }, [isMobile]);

  useEffect(() => {
    const sectionArr = document.querySelectorAll('.question-section');

    const observerHandler = (entries) => {
      const changeActive = (id) => {
        const sideMenuActive = document.querySelector(`.sidebar-wrapper .list-item.active`);
        const sideMenuRefer = document.querySelector(`.sidebar-wrapper .list-item[data-id=${id}]`);

        sideMenuActive && sideMenuActive.classList.remove('active');
        sideMenuRefer && sideMenuRefer.classList.add('active');
      };

      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.6 && entry.intersectionRatio < 0.7) {
          changeActive(entry.target.id);
        }
      });
    };

    const scrollHandler = () => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.6, 0.8],
        trackVisibility: true,
        delay: 200,
      };

      const observer = new IntersectionObserver(observerHandler, options);
      sectionArr.forEach((section) => {
        observer.observe(section);
      });
    };
    window.addEventListener('scroll', scrollHandler);
  }, []);

  const resetInput = () => {
    const tagListArr = document.querySelectorAll('.tags-container');
    tagListArr.forEach((tagList) => {
      tagList.classList.remove('d-none');
    });
    setInputValue('');
    setSearch(search + 1);
    const searchInput = document.querySelector('#faq-search');
    searchInput.value = '';
    setQuestions(faq.questions);
  };

  useEffect(() => {
    const chipHandler = (event) => {
      const questionsModel = JSON.parse(JSON.stringify(faq.questions));
      let currentTarget;
      if (event.target.classList.contains('chip')) {
        currentTarget = event.target;
      } else {
        currentTarget = event.target.closest('.chip');
      }
      if (currentTarget.classList.contains('active')) {
        currentTarget.classList.remove('active');
        const icon = currentTarget.querySelector('.chip-icon');
        icon.classList.remove('active');
      } else {
        currentTarget.classList.add('active');
        const icon = currentTarget.querySelector('.chip-icon');
        icon.classList.add('active');
      }
      const currentActiveArr = document.querySelectorAll('.chip.active');
      let chipsContainerArr = [];
      currentActiveArr.forEach((activeChip) => {
        chipsContainerArr.push(activeChip.closest('ul'));
      });
      chipsContainerArr = [...new Set(chipsContainerArr)];
      const activeQuestions = {};
      activeQuestions.list = [];
      chipsContainerArr.forEach((activeQuestion, index) => {
        let activeChips = activeQuestion.querySelectorAll('.chip.active');
        activeChips = Array.prototype.slice.call(activeChips).map((chip) => chip.getAttribute('data-id'));
        activeQuestions.list.push({
          id: index,
          sectionId: activeQuestion.getAttribute('data-measure'),
          chips: activeChips,
        });
      });
      const result = (questionsModel, activeQuestions) => {
        let filtered = questionsModel;
        filtered.forEach((category) => {
          if (category.chips) {
            const activeSectionIdArr = activeQuestions.map((question) => question.sectionId);
            const currentSection = document.querySelector(`#${category.sectionId}`);
            const filterNumber = currentSection.querySelector('.filter-selected');
            if (activeSectionIdArr.includes(category.sectionId)) {
              activeQuestions.forEach((activeQuestion) => {
                if (activeQuestion.sectionId === category.sectionId) {
                  const tagActiveArr = activeQuestion.chips;
                  const activeTagLength = tagActiveArr.length;
                  filterNumber.innerHTML = activeTagLength;
                  const questions = category.accordions;
                  const temp = [];
                  questions.forEach((question) => {
                    const tagArr = question.tag;
                    if (tagArr) {
                      tagArr.forEach((tag) => {
                        if (tagActiveArr.includes('altri-enti')) {
                          if (tagActiveArr.length === 1 || tagActiveArr.length > 2) {
                            if (tagActiveArr.includes(tag)) {
                              temp.push(question);
                            }
                          } else {
                            const tagActiveFiltered = tagActiveArr.filter((tag) => tag !== 'altri-enti');
                            if (tagActiveFiltered.includes(tag)) {
                              temp.push(question);
                            }
                          }
                        } else {
                          if (tagActiveArr.includes(tag)) {
                            temp.push(question);
                          }
                        }
                      });
                    }
                  });
                  category.accordions = temp;
                }
              });
            } else {
              category.accordions = [];
              filterNumber.innerHTML = 0;
            }
          }
        });
        filtered = filtered.filter((category) =>
          category.accordions.filter((question) => {
            if (question !== '') {
              return question;
            }
          })
        );
        setQuestions(filtered);
      };

      result(questionsModel, activeQuestions.list);
    };
    const chipsArr = document.querySelectorAll('.chip');
    chipsArr.forEach((chip) => {
      chip.addEventListener('click', chipHandler, true);
    });
  }, [search]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <HeroSupport title={faq.hero.title} subtitle={faq.hero.subtitle} isFaq={true} />
      <div className="docs py-4 py-md-5">
        <Container className="px-3">
          <h2 id="question-section" className="sr-only">
            Sezione domande frequenti
          </h2>
          <Row>
            <Col lg={9} className="offset-lg-3 px-lg-3">
              <div role="search" className={classes.inputContainer} aria-label="Nelle domande frequenti">
                <div id="searchbox-desk" className="sr-only">
                  Ad ogni digitazione il numero di domande frequenti presenti in pagina verrà aggiornato.
                </div>
                <Input
                  className={inputValue.length > 0 ? '' : classes.inputWrap}
                  type="text"
                  label="Cerca nelle domande frequenti"
                  id="faq-search"
                  role="searchbox"
                  aria-describedby="searchbox-desk"
                  aria-controls="id-list-faq"
                  onChange={handleChange}
                />
                {inputValue.length > 0 && (
                  <button className="reset-btn" onClick={resetInput}>
                    <span className="sr-only">Il campo svuota l'input</span>
                  </button>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} className={classes.sidenav}>
              <SideNavigation
                getFilter={setFilterId}
                activeList={questions}
                searchValue={inputValue}
                list={content.sidebar}
              />
            </Col>
            <Col
              lg={9}
              className="px-lg-3"
              id="id-list-faq"
              role="region"
              aria-label="Lista domande frequenti"
              aria-describedby="numberfaq"
            >
              <span className="sr-only" id="numberfaq" aria-live="assertive">
                Numero faq filtrate {questNum}
              </span>
              <Totop />
              {questions.map((question) => (
                <QuestionSection
                  key={question.title}
                  item={question}
                  inputText={inputValue}
                  setQuestions={setQuestions}
                />
              ))}
              {!questions.length && (
                <p className={classes.noResults} role="alert">
                  {faq.noResults}
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection supportList={faq.support.cards} title={faq.support.title} />
    </>
  );
};
