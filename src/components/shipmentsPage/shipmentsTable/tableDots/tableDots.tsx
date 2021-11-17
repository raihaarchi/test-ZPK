import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { unwrapResult } from '@reduxjs/toolkit';
import {
  ShipmentsState,
  postShipments,
  getFileShipment,
} from 'reducers/shipmentsSlice';

import XlsIcon from 'components/icons/xlsIcon';
import MenuLayout from 'ui-kit/menuLayout/menulLayout';
import { downloadFile } from 'utils/file';
import Button from 'ui-kit/button/button';

import { RowHoverProps } from 'types/table';

import styled from 'styled/styled';

const StyledTableButton = styled.div`
  position: relative;
`;

const StyledDots = styled.div`
  width: 35px;
  height: 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const StyledRowMenu = styled(MenuLayout)`
  top: 40px;
  right: 0;
  left: unset;
  padding: 25px;

  .modal-downloads {
    margin-top: 50px;

    &__text {
      ${({ theme }) => theme.typography.text14x18};
      opacity: 0.5;
      margin-bottom: 7px;
    }

    &__link {
      ${({ theme }) => theme.typography.text14x18};
      color: ${({ theme }) => theme.colors.blue};
      margin-right: 20px;

      &:last-of-type {
        margin-right: 0;
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

const StyledMenuButton = styled(Button)`
  width: 202px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const TableDots: FC<RowHoverProps> = ({ idOrder, isHovered }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { shipments } = useSelector<RootState, ShipmentsState>(
    ({ shipments }) => shipments,
  );
  const item = shipments?.find(({ id }) => id === idOrder);
  const dispatch = useAppDispatch();

  const refuseShipment = () => dispatch(postShipments({ id: idOrder }));

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isHovered]);

  const handleFile = async (
    e: React.MouseEvent<HTMLButtonElement>,
    { name, ext, path }: { name: string; ext: string; path?: string },
  ) => {
    e.stopPropagation();
    if (path) {
      downloadFile(
        unwrapResult(
          await dispatch(
            getFileShipment({
              path,
              name,
              ext,
            }),
          ),
        ),
      );
    }
  };

  const openMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledTableButton>
      <StyledDots onClick={openMenu}>
        <StyledDot className="dots-item" />
        <StyledDot className="dots-item" />
        <StyledDot className="dots-item" />
      </StyledDots>
      {isMenuOpen && (
        <StyledRowMenu setOpen={setIsMenuOpen}>
          <StyledMenuButton onClick={refuseShipment}>
            Отказаться
          </StyledMenuButton>
          <StyledMenuButton>Создать копию</StyledMenuButton>
          <div className="modal-downloads">
            <span className="modal-downloads__text">Скачать</span>
            <div className="modal-downloads__links">
              {item?.actions.map(({ action, code }, index) => {
                const fileExtension = code?.match(/PDF|CSV|XLSX/i)
                  ? code?.match(/PDF|CSV|XLSX/i)?.[0]
                  : false;
                if (fileExtension) {
                  return (
                    <button
                      key={index}
                      className="modal-downloads__link"
                      onClick={(e) =>
                        handleFile(e, {
                          name: item.documentNumber,
                          ext: fileExtension,
                          path: action,
                        })
                      }>
                      <XlsIcon />.{fileExtension.toUpperCase()}
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </StyledRowMenu>
      )}
    </StyledTableButton>
  );
};

export default TableDots;
