import { FC, useRef } from 'react';
import { useAppDispatch } from 'store';
import { addFileAttachment } from 'reducers/attachmentSlice';

import useScreen from 'hooks/useScreen';
import styled from 'styled/styled';

const StyledDownload = styled.div`
  position: relative;
  margin-bottom: 15px;
  min-width: 100%;
  height: 50px;
  border: 2px dashed ${({ theme }) => theme.colors['dark-grey']};
  border-radius: 8px;
  text-align: center;
  ${({ theme }) => theme.typography.text14x18};
  line-height: 50px;

  .dowloand-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const UploaderFile: FC = () => {
  const { isMobile } = useScreen();
  const fileRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (fileRef && fileRef.current) {
      const files = fileRef.current.files;
      const file = files && files[0];
      if (file) dispatch(addFileAttachment({ file }));
      fileRef.current.files = null;
    }
  };
  return (
    <StyledDownload>
      {isMobile ? 'Прикрепить документ' : 'Перенесите файлы сюда или загрузите'}

      <input
        ref={fileRef}
        className="dowloand-input"
        type="file"
        onChange={uploadFile}
      />
    </StyledDownload>
  );
};

export default UploaderFile;
