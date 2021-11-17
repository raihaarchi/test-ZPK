import React, { FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import Link from 'next/link';

interface StyledContainerProps {
  isWhite?: boolean;
}

const StyledContainer = styled.section<StyledContainerProps>`
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 10px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 20px;
  }

  .questions__card {
    background: ${(props) =>
      props.isWhite ? props.theme.colors.white : props.theme.colors.grey};
    border-radius: 15px;
    padding: 42px 86px 39px 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 37px 30px 38px 30px;
      flex-direction: column;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding: 27px 15px 130px 15px;
      border-radius: 0;
    }

    .questions__title {
      ${({ theme }) => theme.typography.text30x30}
      color: ${(props) => props.theme.colors.black};
      margin-right: 20px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        align-self: flex-start;
        margin-bottom: 36px;
        margin-right: 0;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 13px;
        align-self: center;
        text-align: center;
      }
    }

    .questions__button-wrapper {
      display: flex;
      align-items: center;

      .questions__button {
        @media (max-width: ${(props) => props.theme.screens.desktop}) {
          height: 60px;
          ${({ theme }) => theme.typography.text18x25}
          border-radius: 15px;
          padding-left: 40px;
          padding-right: 40px;
          align-self: flex-start;
          margin-top: 10px;
        }
        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          height: 40px;
          padding-left: 15px;
          padding-right: 15px;
          ${({ theme }) => theme.typography.text14x18}
          border-radius: 8px;
          margin-top: 0;
        }
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        position: relative;
      }

      .questions__letter-icon {
        margin-right: 25px;
        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          margin-right: 0;
          position: absolute;
          bottom: -25px;
          left: 0;
          transform: translateX(-50%) translateY(100%);
          height: 70px;
        }
      }

      .questions__answer-icon {
        margin-left: 9px;
        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          margin-left: 0;
          position: absolute;
          bottom: -25px;
          right: 0;
          transform: translateX(50%) translateY(100%);
          height: 60px;
        }
      }
    }
  }
`;

const Questions: FC<StyledContainerProps> = ({ isWhite = false }) => {
  return (
    <StyledContainer
      className="layout-wrapper"
      data-aos="fade-in"
      data-aos-once="true"
      data-aos-duration="500"
      isWhite={isWhite}>
      <div className={'questions__card'}>
        <h3 className="questions__title">Остались вопросы?</h3>
        <div className="questions__button-wrapper">
          <img
            src="/images/letter.svg"
            alt="вопрос"
            className="questions__letter-icon"
          />
          <Link href="/suppliers#form">
            <a>
              <Button
                theme="secondary"
                onClick={() => null}
                className="questions__button">
                С радостью их решим
              </Button>
            </a>
          </Link>
          <img
            src="/images/answer.svg"
            alt="ответ"
            className="questions__answer-icon"
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Questions;
