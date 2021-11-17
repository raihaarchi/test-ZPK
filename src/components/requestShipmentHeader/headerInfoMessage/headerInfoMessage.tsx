import { FC } from 'react';
import styled from 'styled/styled';
import Attention from 'components/icons/attention';
import { Message } from 'types/requestShipmentHeader';

const StyledHeaderInfoMessage = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 54px;
  align-items: center;
  padding-left: 32px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-left: 20px;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-left: 15px;
  }
  .info-message {
    &__text {
      margin-left: 25px;
      ${({ theme }) => theme.typography.text16x20}
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-left: 20px;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        ${({ theme }) => theme.typography.text14x18}
        margin-left: 15px;
      }
    }
    &__icon {
      width: 30px;
      height: 30px;
    }
  }
`;

interface HeaderInfoMessageProps {
  message: Message;
}

export const HeaderInfoMessage: FC<HeaderInfoMessageProps> = ({ message }) => {
  return (
    <StyledHeaderInfoMessage>
      <span className="info-message__icon">
        <Attention />
      </span>
      <p className="info-message__text">
        <b>{message.bold}</b> {message.normal}
      </p>
    </StyledHeaderInfoMessage>
  );
};

export default HeaderInfoMessage;
