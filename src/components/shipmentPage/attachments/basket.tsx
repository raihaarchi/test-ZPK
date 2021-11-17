import { FC } from 'react';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  AttachmentState,
  removeFileAttachment,
} from 'reducers/attachmentSlice';
import BasketIcon from 'components/icons/basket';

type BasketProps = {
  id: number;
  loading: boolean;
};

const Basket: FC<BasketProps> = ({ id, loading }) => {
  const { loadingAttachment } = useSelector<RootState, AttachmentState>(
    ({ attachment }) => attachment,
  );

  const dispatch = useAppDispatch();
  const removeFile = () => dispatch(removeFileAttachment({ id }));
  return (
    <>
      {loading && loadingAttachment ? (
        'Загрузка...'
      ) : (
        <button onClick={removeFile}>
          <BasketIcon />
        </button>
      )}
    </>
  );
};

export default Basket;
