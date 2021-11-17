import cn from 'classnames';
import styled from 'styled/styled';
import React, { FC, useEffect, useState, useRef } from 'react';

interface StyledAccordionProps {
  accordionHeight: number;
}

const StyledAccordion = styled.div<StyledAccordionProps>`
  overflow: hidden;
  height: ${(props) => props.accordionHeight}px;
  transition: height 0.5s ease-in-out;
  border-bottom: 1px solid ${({ theme }) => theme.colors['middle-grey']};

  .accordion__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      height: 80px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding: 25px 0;
      align-items: flex-start;
    }

    .accordion__title {
      ${({ theme }) => theme.typography.text30x30}

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 245px;
        ${({ theme }) => theme.typography.text18x20}
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        max-width: 245px;
        margin-top: 5px;
        ${({ theme }) => theme.typography.text16x20}
      }
    }

    .accordion__button {
      margin-right: 1px;
      position: relative;
      border: 2px solid ${({ theme }) => theme.colors.black};
      border-radius: 100%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      transition: transform 0.7s ease-in-out;

      &_item {
        width: 18px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: all 0.3s ease-in-out;
        transform: translate(-50%, -50%);
      }

      &_closed {
        transform: rotate(360deg);
        .accordion__button_item:last-child {
          left: 17%;
          top: 45%;
          transform: rotate(90deg);
        }
      }
    }
  }
`;

interface AccordionProps {
  title: string;
  className?: string;
  content: (ref: React.Ref<HTMLDivElement>) => React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, content, className }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((val) => !val);

  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [accordionHeight, setAccordionHeight] = useState<number>(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const { scrollHeight } = headerRef.current;

      setAccordionHeight(scrollHeight);
      setHeaderHeight(scrollHeight);
    }
  }, []);

  const updateHeight = () => {
    if (contentRef.current) {
      setAccordionHeight(
        accordionHeight > headerHeight
          ? headerHeight
          : contentRef?.current.scrollHeight + headerHeight,
      );
    }
  };

  const handleClick = () => {
    updateHeight();
    toggleOpen();
  };
  return (
    <StyledAccordion className={className} accordionHeight={accordionHeight}>
      <div
        ref={headerRef}
        className={cn('accordion__header')}
        onClick={handleClick}>
        <h3 className="accordion__title">{title}</h3>
        <div
          className={cn('accordion__button', {
            accordion__button_closed: !isOpen,
          })}>
          <span className="accordion__button_item" />
          <span className="accordion__button_item" />
        </div>
      </div>
      {content(contentRef)}
    </StyledAccordion>
  );
};

export default Accordion;
