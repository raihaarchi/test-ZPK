import React, { FC, useState } from 'react';
import Button from 'ui-kit/button/button';
import ArrowRightIcon from 'components/icons/arrowRight';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled/styled';
import ArrowRightSmallIcon from 'components/icons/arrowRightSmall';

interface StyledContainerProps {
  color: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  border-radius: 15px;
  flex: 1;
  background: ${(props) => props.color};
  position: relative;
  padding: 17px 68px 42px 40px;
  height: 100%;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 20px 15px;
    height: 420px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 35px 15px 20px 15px;
  }

  .stepCard__icon-wrapper {
    display: flex;
    align-items: flex-end;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 26px;
      display: block;
      position: relative;
    }

    .stepCard__icon {
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  .stepCard__step-index {
    font-weight: 600;
    font-size: 130px;
    line-height: 134px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
  }

  .stepCard__title {
    ${({ theme }) => theme.typography.text30x30}
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 16px;
    word-break: break-word;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      max-width: 185px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 6px;
    }
  }

  .stepCard__description {
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors.black};
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  .stepCard__arrowRightIcon {
    margin-left: 10px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 15px;
      width: 20px;
      margin-left: 15px;
    }
  }

  .stepCard__buttom-mobile {
    display: none;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: flex;
      height: 40px;
    }
  }

  .stepCard__action {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .stepCard__data {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      align-items: flex-start;
    }
  }

  .stepCard__button-wrapper {
    position: absolute;
    background: ${(props) => props.color};
    left: 0;
    right: 0;
    border-radius: 15px;
  }

  .stepCard__button-container {
    padding: 42px 40px 20px 40px;
  }
`;

interface StepCardPropsType {
  className?: string;
  background: string;
  icon: string;
  imageAlt: string;
  title: string;
  description: string;
  stepIndex: string;
  buttonText: string;
  onButtonClick: () => void;
}

const StepCard: FC<StepCardPropsType> = ({
  className,
  background,
  icon,
  imageAlt,
  title,
  description,
  stepIndex,
  buttonText,
  onButtonClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };
  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledContainer
      className={className}
      color={background}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div className="stepCard__icon-wrapper">
        <p className="stepCard__step-index">{stepIndex}</p>
        <img src={icon} className="stepCard__icon" alt={imageAlt} />
      </div>
      <motion.div className="stepCard__data">
        <div>
          <h3 className="stepCard__title">{title}</h3>
          <p className="stepCard__description">{description}</p>
        </div>
        <Button
          theme="secondary"
          onClick={onButtonClick}
          className="stepCard__buttom-mobile">
          {buttonText}
          <ArrowRightSmallIcon className="stepCard__arrowRightIcon" />
        </Button>
        <div className="stepCard__action">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: 'auto',
                  transition: { duration: 0.4 },
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.4 },
                }}
                className={'stepCard__button-wrapper'}>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3, delay: 0.3 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0 },
                  }}
                  className={'stepCard__button-container'}>
                  <Button theme="secondary" onClick={onButtonClick}>
                    {buttonText}
                    <ArrowRightIcon className="stepCard__arrowRightIcon" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </StyledContainer>
  );
};

export default StepCard;
