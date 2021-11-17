import React, { FC } from 'react';
import styled from 'styled/styled';
import { Question } from 'types/faq';
import Accordion from 'ui-kit/accordion/Accrodion';

const StyledText = styled.p`
  ${({ theme }) => theme.typography.text16x20};
  padding-top: 38px;
  padding-bottom: 57px;
  max-width: 583px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 0;
    max-width: 393px;
    padding-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    max-width: 290px;
    padding-bottom: 25px;
  }
`;

const FaqAccordion: FC<Question> = ({ question, answer }) => (
  <Accordion
    title={question}
    content={(ref) => <StyledText ref={ref}>{answer}</StyledText>}
  />
);

export default FaqAccordion;
