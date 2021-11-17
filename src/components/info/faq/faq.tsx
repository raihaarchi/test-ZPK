import React, { FC } from 'react';
import { FaqDataType } from 'types/faq';
import FaqHeader from './faqHeader/faqHeader';
import FaqContent from './faqContent/faqContent';
import Questions from 'components/indexPage/questions/questions';
import FaqAccordion from './faqContent/faqAccordion/faqAccordion';

interface FaqProps {
  data: FaqDataType;
}

const Faq: FC<FaqProps> = ({
  data: { title, description, email, categories },
}) => {
  return (
    <>
      <div className="wrapper">
        <FaqHeader title={title} description={description} email={email} />
        {categories.map(({ name, questions }, index) => (
          <FaqContent key={index} text={name}>
            {questions.map((item, subIndex) => (
              <FaqAccordion key={subIndex} {...item} />
            ))}
          </FaqContent>
        ))}
      </div>
      <Questions isWhite />
    </>
  );
};

export default Faq;
