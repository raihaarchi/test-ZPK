import { FC } from 'react';
import Link from 'next/link';
import HeaderTop from './headerTop/headerTop';
import HeaderBottom from './headerBottom/headerBottom';
import ArrowLeftSmall from 'components/icons/arrowLeftSmall';
import HeaderInfoMessage from './headerInfoMessage/headerInfoMessage';
import { RequestShipmentHeaderData } from 'types/requestShipmentHeader';
import { setLoader } from 'reducers/headerSlice';
import { useAppDispatch } from 'store';

import styled from 'styled/styled';

const StyledRequestShipmentHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-right: 96px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 50px;
      margin-right: 0px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 20px;
      margin-right: 0px;
      flex-direction: column;
    }
    &__link-back {
      ${({ theme }) => theme.typography.text12x15}
      color: ${({ theme }) => theme.colors.blue};
      white-space: nowrap;
      span {
        margin-left: 5px;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 5px;
      }
    }
    &__content {
      max-width: 1000px;
      min-width: 75%;
    }
  }
`;

interface RequestShipmentHeaderProps {
  data: RequestShipmentHeaderData;
}

export const RequestShipmentHeader: FC<RequestShipmentHeaderProps> = ({
  data,
}) => {
  const {
    btnBack,
    title,
    subtitle,
    buttons,
    status,
    sum,
    download,
    message,
    isEdited,
  } = data;
  const dispatch = useAppDispatch();

  return (
    <StyledRequestShipmentHeader>
      <div className="header">
        <Link href={btnBack.link}>
          <a
            className="header__link-back"
            onClick={() => dispatch(setLoader(true))}>
            <ArrowLeftSmall />
            <span>{btnBack.name}</span>
          </a>
        </Link>
        <div className="header__content">
          <HeaderTop title={title} subtitle={subtitle} buttons={buttons} />
          <HeaderBottom status={status} sum={sum} download={download} />
        </div>
      </div>
      {isEdited && <HeaderInfoMessage message={message} />}
    </StyledRequestShipmentHeader>
  );
};

export default RequestShipmentHeader;
