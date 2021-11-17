import { FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import HeaderTitle from './headerTitle/headerTitle';
import {
  Title,
  Subtitle,
  RequestShipmentBtn,
} from 'types/requestShipmentHeader';

const StyledHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
  }
  .top {
    &__title {
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 10px;
      }
    }
    &__btns {
      width: 180px;
      &-btn {
        width: 100%;
        &:not(:first-of-type) {
          margin-top: 10px;
        }
      }
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 160px;
        &-btn {
          min-height: 40px;
          &:not(:first-of-type) {
            margin-top: 5px;
          }
        }
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 100%;
      }
    }
  }
`;

interface HeaderTopProps {
  title: Title;
  subtitle: Subtitle;
  buttons: RequestShipmentBtn[];
}

export const HeaderTop: FC<HeaderTopProps> = ({ title, subtitle, buttons }) => {
  return (
    <StyledHeaderTop>
      <div className="top__title">
        <HeaderTitle title={title} subtitle={subtitle} />
      </div>
      <div className="top__btns">
        {buttons.map((btn) => (
          <Button
            className="top__btns-btn"
            key={btn.id}
            theme="primary"
            onClick={() => null}>
            <p>{btn.name}</p>
          </Button>
        ))}
      </div>
    </StyledHeaderTop>
  );
};

export default HeaderTop;
