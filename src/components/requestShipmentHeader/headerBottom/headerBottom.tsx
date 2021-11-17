import { FC } from 'react';
import { useAppDispatch } from 'store';
import { getFile } from 'reducers/headerSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import RectanglesIcon from 'components/icons/rectangles';
import { Status, Sum, Download } from 'types/requestShipmentHeader';
import HeaderCell from './headerCell/headerCell';
import { downloadFile } from 'utils/file';

import styled from 'styled/styled';

interface StyledHeaderBottomProps {
  isSuccess: boolean;
}

const StyledHeaderBottom = styled.div<StyledHeaderBottomProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 30px;
    flex-direction: column;
  }
  .bottom {
    &__status {
      max-width: 125px;
      ${({ theme }) => theme.typography.text18x26Bold}
      color: ${({ theme, isSuccess }) =>
        isSuccess ? theme.colors.success : theme.colors.failure};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        max-width: 115px;
        ${({ theme }) => theme.typography.text16x20Bold}
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
    &__sum {
      &-item {
        ${({ theme }) => theme.typography.text14x30}
        display: flex;
        b {
          margin-right: 10px;
          min-width: 70px;
          ${({ theme }) => theme.typography.text18x26Bold}
        }
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text12x15}
          b {
            ${({ theme }) => theme.typography.text16x20Bold}
          }
        }
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 20px;
      }
    }
    &__download {
      ${({ theme }) => theme.typography.text14x18}
      color: ${({ theme }) => theme.colors.blue};
      display: flex;
      &-item {
        display: flex;
        align-items: center;
        button {
          margin-left: 5px;
          ${({ theme }) => theme.typography.text14x18}
          color: ${({ theme }) => theme.colors.blue};
        }
        &:not(:first-of-type) {
          margin-left: 20px;
        }
      }
    }
  }
`;

interface HeaderBottomProps {
  status: Status;
  sum: Sum;
  download: Download;
}

export const HeaderBottom: FC<HeaderBottomProps> = ({
  status,
  sum,
  download,
}) => {
  const dispatch = useAppDispatch();
  const getFileShipment = async (name: string, ext: string, path?: string) => {
    if (path) {
      downloadFile(unwrapResult(await dispatch(getFile({ path, name, ext }))));
    }
  };
  return (
    <StyledHeaderBottom isSuccess={status.isSuccess}>
      <HeaderCell title={status.title}>
        <p className="bottom__status">{status.content}</p>
      </HeaderCell>

      <HeaderCell title={sum.title}>
        <div className="bottom__sum">
          {sum.content.map(({ amount, duty }, i) => (
            <p className="bottom__sum-item" key={i}>
              <b>{amount}</b> {duty}
            </p>
          ))}
        </div>
      </HeaderCell>

      <HeaderCell title={download.title}>
        <div className="bottom__download">
          {download.content.map(({ action, code }, i) => {
            const { fileName } = download;
            const fileExtension = code?.match(/PDF|CSV|XLSX/i)
              ? code?.match(/PDF|CSV|XLSX/i)?.[0]
              : false;
            if (fileExtension) {
              return (
                <div key={i} className="bottom__download-item">
                  <RectanglesIcon />
                  <button
                    onClick={() =>
                      getFileShipment(fileName, fileExtension, action)
                    }>
                    .{fileExtension.toUpperCase()}
                  </button>
                </div>
              );
            }
          })}
        </div>
      </HeaderCell>
    </StyledHeaderBottom>
  );
};

export default HeaderBottom;
