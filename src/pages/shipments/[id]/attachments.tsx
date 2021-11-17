import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { AttachmentState, getFileAttachment } from 'reducers/attachmentSlice';
import { UserState } from 'reducers/userSlice';

import ShipmnetLayout from 'components/shipmentPage/shipmentLayout';
import Table from 'components/personalAccount/table/table';
import attachmentsTable from 'components/shipmentPage/attachments/attachmentsTable';
// // Styled Components
import { StyledAttachments } from 'components/shipmentPage/attachments/styledAttachments';
import { StyledBlock } from 'components/shipmentPage/attachments/styledBlock';
import { StyledHeading } from 'components/shipmentPage/attachments/styledHeading';
import Basket from 'components/shipmentPage/attachments/basket';
import Loader from 'components/Loader/Loader';
import { typeFile } from 'types/typeFileAttachment';

import styled from 'styled/styled';

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const StyledMargin = styled.div`
  margin-right: 40px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-right: 0px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-right: 0px;
  }
`;

const Attachments: FC & { Layout: FC } = () => {
  const { isFallback, query } = useRouter();
  const { isCustomer } = useSelector<RootState, UserState>((s) => s.user);
  const dispatch = useAppDispatch();

  const { shipment, fileAttachment } = useSelector<RootState, AttachmentState>(
    ({ attachment }) => attachment,
  );

  useEffect(() => {
    if (shipment) {
      dispatch(getFileAttachment());
    }
  }, [shipment]);

  if (!isFallback && !fileAttachment)
    return <h1>Извините, произошла ошибка.</h1>;

  if (isFallback)
    return (
      <StyledLoading>
        <Loader />
      </StyledLoading>
    );

  return (
    <>
      <Head>
        <title>Отгрузка вложения</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMargin>
        {attachmentsTable<typeFile>(fileAttachment, query).map(
          ({ heading, table }) => {
            if (table.length || !isCustomer) {
              return (
                <StyledAttachments key={heading}>
                  <StyledBlock>
                    <StyledHeading>{heading}</StyledHeading>
                  </StyledBlock>
                  <Table
                    data={table}
                    isDownload={heading.includes('Файлы') && !isCustomer}
                    widthTh="15%"
                    onElementRow={(id, loading) => (
                      <Basket id={id} loading={loading || false} />
                    )}
                  />
                </StyledAttachments>
              );
            }
          },
        )}
      </StyledMargin>
    </>
  );
};

Attachments.Layout = ShipmnetLayout;

export default Attachments;
