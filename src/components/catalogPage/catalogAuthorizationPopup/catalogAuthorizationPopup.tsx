import React, { useState } from 'react';
import { saveStateIsCatalogPopupShown } from 'store/localStorage';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import Popup from 'ui-kit/popup/popup';

const StyledContainer = styled.div`
  .catalog-authorization-popup__title {
    ${({ theme }) => theme.typography.text55x60};
    margin-bottom: 20px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
      margin-bottom: 38px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text24x30};
      margin-bottom: 18px;
    }
  }

  .catalog-authorization-popup_text {
    ${({ theme }) => theme.typography.text18x25};
    margin-bottom: 30px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 45px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18};
      margin-bottom: 42px;
    }
  }

  .catalog-authorization-popup__buttons-wrapper {
    display: flex;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .catalog-authorization-popup__sign-up-button {
    margin-right: 20px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  .catalog-authorization-popup__button.catalog-authorization-popup__custom-button {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 60px;
      padding: 0 40px;
      border-radius: 15px;
      ${(props) => props.theme.typography.text18x25};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
      border-radius: 8px;
      ${(props) => props.theme.typography.text14x18};
    }
  }
`;

const CatalogAuthorizationPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    saveStateIsCatalogPopupShown(true);
  };

  return (
    <Popup isOpen={isPopupOpen} close={handleClosePopup}>
      <StyledContainer>
        <h2 className="catalog-authorization-popup__title">
          Это ознакомительный каталог
        </h2>
        <p className="catalog-authorization-popup_text">
          Для доступа к полному каталогу и оформлению заказа вам необходимо
          зарегистрироваться или войти, если у вас уже есть личный кабинет.
        </p>
        <div className="catalog-authorization-popup__buttons-wrapper">
          <Button
            theme="secondary"
            className="catalog-authorization-popup__sign-up-button catalog-authorization-popup__button catalog-authorization-popup__custom-button">
            Регистрация
          </Button>
          <Button
            theme="secondary"
            className="catalog-authorization-popup__button catalog-authorization-popup__custom-button">
            Вход
          </Button>
        </div>
      </StyledContainer>
    </Popup>
  );
};

export default CatalogAuthorizationPopup;
