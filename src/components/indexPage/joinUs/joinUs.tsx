import React from 'react';
import Button from 'ui-kit/button/button';
import ArrowRightIcon from 'components/icons/arrowRight';
import styled from 'styled/styled';
import ArrowRightSmallIcon from 'components/icons/arrowRightSmall';

const StyledContainer = styled.section`
  margin-bottom: 143px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
    margin-bottom: 80px;
  }

  .joinUs__info {
    max-width: 400px;
    margin-right: 20px;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  .joinUs__title {
    ${({ theme }) => theme.typography.text55x60}
    color: ${(props) => props.theme.colors['cocoa-brown']};
    margin-bottom: 32px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
      margin-bottom: 40px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 26px;
    }
  }

  .joinUs__description {
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 57px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20}
      margin-bottom: 40px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18}
      margin-bottom: 35px;
    }
  }

  .joinUs__image-wrapper {
    align-self: flex-end;
    margin-top: 28px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 53px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 0px;
    }
  }

  .joinUs__image {
    width: 671px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      width: 480px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 334px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 100%;
    }
  }

  .joinUs__arrowRightIcon {
    margin-left: 10px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .joinUs__arrowRightSmallIcon {
    display: none;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-left: 15px;
      display: block;
    }
  }
`;

const JoinUs = () => {
  return (
    <StyledContainer
      className="wrapper"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500">
      <div className="joinUs__info">
        <h2 className="joinUs__title">Будьте с нами</h2>
        <p className="joinUs__description">
          Как это работает? Очень просто! Чтобы стать нашим клиентом необходимо
          пройти бесплатную регистрацию (указав ИНН) и получить доступ в личный
          кабинет
        </p>
        <Button
          theme="secondary"
          onClick={() => null}
          className="joinUs__button">
          Присоединяйтесь
          <ArrowRightIcon className="joinUs__arrowRightIcon" />
          <ArrowRightSmallIcon className="joinUs__arrowRightSmallIcon" />
        </Button>
      </div>
      <div className="joinUs__image-wrapper">
        <img
          className="joinUs__image"
          src="/images/desktop.png"
          alt="личный кабинет"
        />
      </div>
    </StyledContainer>
  );
};

export default JoinUs;
