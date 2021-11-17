import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled/styled';
import TextArea from 'ui-kit/textArea/textarea';

const StyledContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};

  padding-bottom: 60px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 0;
    border-bottom: none;
  }

  .checkout-comment__title {
    ${({ theme }) => theme.typography.text30x30};
    margin-bottom: 33px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 20px;
    }
  }

  .checkout-comment__textarea {
    max-width: 497px;
    width: 100%;
    height: 255px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 200px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 140px;
    }
  }
`;

interface CheckoutCommentProps {
  className?: string;
}

const CheckoutComment: FC<CheckoutCommentProps> = ({ className }) => {
  const { register } = useFormContext();

  return (
    <StyledContainer className={className}>
      <h3 className="checkout-comment__title">Комментарии к заказу</h3>
      <TextArea
        ref={register}
        name="comments"
        className="checkout-comment__textarea"
      />
    </StyledContainer>
  );
};

export default CheckoutComment;
