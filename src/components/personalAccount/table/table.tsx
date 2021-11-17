import { FC, ReactElement } from 'react';

import UploaderFile from 'components/shipmentPage/attachments/uploaderFile';
import styled from 'styled/styled';
import { css } from '@emotion/core';

const StyledTable = styled.table`
  ${({ theme: { typography } }) => typography.text16x20};

  border-collapse: collapse;
  width: 100%;

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    ${({ theme: { typography } }) => typography.text14x18};

    border-collapse: separate;
  }
`;

interface IStyledTr {
  isOrganization?: boolean;
}

const StyledTr = styled.tr<IStyledTr>`
  ${({ isOrganization }) => {
    if (isOrganization) {
      return css`
        &:nth-of-type(8) th,
        &:nth-of-type(8) td {
          padding-top: 71px;
        }
        &:nth-of-type(10) th,
        &:nth-of-type(10) td {
          padding-top: 61px;
        }
      `;
    }
  }};
`;

type StyledThProps = {
  widthTh?: string;
};

const StyledTh = styled.th<StyledThProps>`
  text-align: left;
  font-weight: normal;
  width: ${({ widthTh }) => widthTh || '45%'};
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors['dark-grey']};

  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    padding-right: 7px;
    width: ${({ widthTh }) => (widthTh ? '' : 'width: auto')};
  }
`;

type StyledTdProps = {
  isElementRow: boolean;
};

const StyledTd = styled.td<StyledTdProps>`
  position: relative;
  padding: 10px 0;
  ${({ isElementRow }) => (isElementRow ? 'padding-right: 80px' : '')};

  max-width: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors['dark-grey']};

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    padding-left: 7px;
    width: 50%;
  }

  .td-element {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    ${({ theme }) => theme.typography.text10x12}
  }
`;

const StyledContainer = styled.div`
  width: 100%;
`;

interface Props {
  data: {
    id?: number;
    heading: string;
    content: string | number | ReactElement;
    loading?: boolean;
  }[];
  isOrganization?: boolean;
  className?: string;
  widthTh?: string;
  isDownload?: boolean;
  onElementRow?: (id: number, loading?: boolean) => JSX.Element;
}

const Table: FC<Props> = ({
  data,
  isOrganization,
  className,
  isDownload,
  widthTh,
  onElementRow,
}) => (
  <StyledContainer>
    {isDownload && <UploaderFile />}
    <StyledTable className={className}>
      <tbody>
        {data.map(({ id, heading, content, loading }, index) => (
          <StyledTr key={index} isOrganization={isOrganization}>
            <StyledTh widthTh={widthTh}>{heading}</StyledTh>
            <StyledTd isElementRow={onElementRow ? true : false}>
              {content || '-'}
              <div className="td-element">
                {onElementRow && isDownload && id && onElementRow(id, loading)}
              </div>
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  </StyledContainer>
);

export default Table;
