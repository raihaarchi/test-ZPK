import React from 'react';
import styled from 'styled/styled';
import Link from 'next/link';
import Logo from 'components/icons/logo';
import Input from 'ui-kit/input/input';

const StyledContainer = styled.footer`
  padding-bottom: 40px;

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-bottom: 10px;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 0;
  }

  .footer__card {
    padding: 46px 40px 34px 40px;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.blue};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      border-radius: 8px;
      padding: 37px 30px 30px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      border-radius: 0;
      padding: 14px 15px 20px 15px;
    }
  }

  .footer__column {
    width: 33.33333%;
    margin-right: 30px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      margin-right: 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: auto;
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    .footer__column-item {
      ${({ theme }) => theme.typography.text16x20}
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 10px;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        font-weight: 400;
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18}
        margin-bottom: 12px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 10px;
        ${({ theme }) => theme.typography.text16x20}
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .footer__support {
      opacity: 0.5;
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        ${({ theme }) => theme.typography.text14x18}
      }
    }
  }

  .footer__column-second {
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 10px;
    }
  }

  .footer__logo-mobile {
    display: none;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      width: 150px;
      height: 32px;
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 36px;
    }
  }

  .footer__navigation {
    display: flex;
    margin-bottom: 90px;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
      margin-bottom: 56px;
    }

    .footer__support-wrapper {
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 49px;
      }
    }
  }

  .footer__subscribe {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 79px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      align-items: flex-start;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 36px;
    }

    .footer__logo-wrapper {
      width: 66.6666%;
      margin-right: 40px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 33.33333%;
        margin-right: 15px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        display: none;
      }

      .footer__logo {
        color: ${(props) => props.theme.colors.white};
        max-width: 255px;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          max-width: 180px;
        }
      }
    }

    .footer__input-wrapper {
      width: 33.3333%;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 66.666%;
        margin-top: 28px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 100%;
        margin-top: 0;
      }

      .footer__input-label {
        ${({ theme }) => theme.typography.text16x20}
        color: ${(props) => props.theme.colors.white};
        opacity: 0.5;

        @media (max-width: ${(props) => props.theme.screens.desktop}) {
          font-weight: 400;
        }

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text14x18}
        }
      }

      .footer__input {
        max-width: 100%;
        margin-top: 5px;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          margin-top: 10px;
        }
      }
    }
  }

  .footer__link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    transition: 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }

  .footer__socials-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      align-items: flex-end;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .footer__terms {
      width: 66.6666%;
      margin-right: 40px;
      margin-top: 15px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-top: 0;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: auto;
      }

      .footer__terms-links {
        display: flex;
        flex-direction: column;
      }

      .footer__terms-agreement {
        margin-bottom: 10px;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          margin-bottom: 12px;
        }
      }

      .footer__terms-link {
        color: ${(props) => props.theme.colors.white};
        opacity: 0.5;
        ${({ theme }) => theme.typography.text16x20}

        @media (max-width: ${(props) => props.theme.screens.desktop}) {
          font-weight: 400;
        }

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text14x18}
        }
      }
    }

    .footer__socials {
      width: 33.333%;
      display: flex;
      align-items: center;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: auto;
        margin-right: 56px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 0;
        margin-bottom: 37px;
      }

      .footer__socials-link {
        display: flex;
        margin-right: 4px;
        transition: all 0.5s;

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          margin-right: 0;
        }

        &:last-child {
          margin-right: 0;
        }
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledContainer className="layout-wrapper" id="footer">
      <div className="footer__card">
        <Logo className="footer__logo-mobile" />

        <div className="footer__navigation">
          <div className="footer__column footer__support-wrapper">
            <p className="footer__column-item footer__support">Поддержка</p>
            <p className="footer__column-item">8 (800) 700 04 25</p>
            <p className="footer__column-item">help@vtbconnect.ru</p>
          </div>
          <nav className="footer__column footer__column-second">
            <ul>
              <li className="footer__column-item">
                <Link href="/about-service">
                  <a className="footer__link">О сервисе</a>
                </Link>
              </li>
              <li className="footer__column-item">
                <Link href="/payment-and-delivery">
                  <a className="footer__link">Оплата и доставка</a>
                </Link>
              </li>
              <li className="footer__column-item">
                <Link href="/suppliers">
                  <a className="footer__link">Поставщикам</a>
                </Link>
              </li>
              <li className="footer__column-item">
                <Link href="/faq">
                  <a className="footer__link">Частые вопросы</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="footer__column">
            <ul>
              <li className="footer__column-item">
                <Link href="/promo">
                  <a className="footer__link">Акции</a>
                </Link>
              </li>
              <li className="footer__column-item">
                <Link href="/">
                  <a className="footer__link">Дайджест PROЗA</a>
                </Link>
              </li>
              <li className="footer__column-item">
                <Link href="/contacts">
                  <a className="footer__link">Контакты</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__subscribe">
          <div className="footer__logo-wrapper">
            <Logo className="footer__logo" />
          </div>
          <div className="footer__input-wrapper">
            <label className="footer__input-label">
              Подпишитесь на рассылку о скидках
              <Input className="footer__input" placeholder="Email" />
            </label>
          </div>
        </div>
        <div className="footer__socials-wrapper">
          <div className="footer__terms">
            <div className="footer__terms-links">
              <a
                href="/"
                className="footer__terms-link footer__terms-agreement">
                Пользовательское соглашение
              </a>
              <a href="/" className="footer__terms-link">
                Обработка персональных данных
              </a>
            </div>
          </div>
          <div className="footer__socials">
            <a href="/" className="footer__socials-link">
              <img src="/images/fb.svg" alt="facebook" />
            </a>
            <a href="/" className="footer__socials-link">
              <img src="/images/vk.svg" alt="vk" />
            </a>
            <a href="/" className="footer__socials-link">
              <img src="/images/od.svg" alt="одноклассники" />
            </a>
            <a href="/" className="footer__socials-link">
              <img src="/images/in.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Footer;
