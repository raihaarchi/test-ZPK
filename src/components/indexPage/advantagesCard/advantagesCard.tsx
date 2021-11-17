import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, useState } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  border-radius: 15px;
  flex: 1;
  background: ${(props) => props.color};
  min-height: 280px;
  height: 100%;
  position: relative;
  padding: 80px 50px 43px 40px;
  display: flex;
  align-items: flex-end;
  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 80px 50px 43px 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 20px 65px 15px 15px;
    flex-direction: column;
    align-items: flex-start;
    min-height: 138px;
    min-height: 120px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    min-height: 120px;
  }

  .advantagesCard__icon {
    position: absolute;
    top: 30px;
    right: 38px;
    transition: all 0.2s;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      top: 20px;
      height: 73px;
      right: 10px;
    }
  }

  .advantagesCard__title {
    position: absolute;
    left: 40px;
    top: 197px;
    ${({ theme }) => theme.typography.text30x30}
    transition: all 0.5s;
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      left: 20px;
      font-size: 23px;
      line-height: 26px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      position: static;
      height: 40px;
      ${({ theme }) => theme.typography.text18x20}
      max-width: 117px;
      margin-bottom: 33px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 15px;
    }
  }

  .advantagesCard__description {
    ${({ theme }) => theme.typography.text30x30}
    max-width: 345px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      font-size: 23px;
      line-height: 26px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .advantagesCard__button {
    display: none;
    outline: none;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: flex;
    }
  }

  .advantagesCard__description-mobile-wrapper {
    display: none;
    overflow: hidden;
    .advantagesCard__description-mobile-block {
      padding-top: 22px;
      padding-bottom: 22px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: block;
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  &:hover {
    .advantagesCard__title {
      top: 42px;
      left: 40px;
      bottom: auto;
      ${({ theme }) => theme.typography.text18x25}
      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        left: 20px;
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text18x20}
      }
    }

    .advantagesCard__icon {
      opacity: 0;
      visibility: hidden;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        opacity: 1;
        visibility: visible;
      }
    }

    .advantagesCard__description {
      opacity: 1;
      visibility: visible;
      transition: all 0.6s;
      transition-delay: 0.3s;
    }
  }
`;

interface AdvantagesCardPropsType {
  className?: string;
  background: string;
  icon: string;
  imageAlt: string;
  title: string;
  description: string;
}

const AdvantagesCard: FC<AdvantagesCardPropsType> = ({
  className,
  background,
  icon,
  imageAlt,
  title,
  description,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  return (
    <StyledContainer className={className} color={background}>
      <h3 className="advantagesCard__title">{title}</h3>
      <p className="advantagesCard__description">{description}</p>
      <motion.div>
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                transition: { duration: 0.4 },
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className="advantagesCard__description-mobile-wrapper">
              <div className="advantagesCard__description-mobile-block">
                <p>{description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpened && (
          <button className="advantagesCard__button" onClick={open}>
            <img src="/images/more.svg" alt="more" />
          </button>
        )}
        {isOpened && (
          <button className="advantagesCard__button" onClick={close}>
            <img src="/images/less.svg" alt="more" />
          </button>
        )}
      </motion.div>
      <img src={icon} className="advantagesCard__icon" alt={imageAlt} />
    </StyledContainer>
  );
};

export default AdvantagesCard;
