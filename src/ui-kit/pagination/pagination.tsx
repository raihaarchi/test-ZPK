import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled/styled';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import ArrowDown from 'components/icons/arrowDown';
import Input from 'ui-kit/input/input';
import ArrowRightIcon from 'components/icons/arrowRight';
import Button from 'ui-kit/button/button';

interface IStyledPagination {
  displayForm: string;
}

const StyledPagination = styled.div<IStyledPagination>`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: column;
    align-items: center;
  }

  .pagination__container {
    ${({ theme }) => theme.typography.text14x18};
    max-width: 55%;
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue};

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  .pagination__break {
    margin-right: 10px;
  }

  .pagination__page {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .pagination__page_active {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.white};
  }

  .pagination__page-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    outline: none;
  }

  .pagination__page-prev {
    cursor: pointer;
    ${({ theme }) => theme.typography.text14x18};
    margin-right: auto;
  }

  .pagination__page-prev-link {
    display: flex;
    align-items: center;
    outline: none;

    svg {
      transform: rotate(90deg);
    }

    p {
      color: ${({ theme }) => theme.colors.black};
      margin-left: 2px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      p {
        display: none;
      }
    }
  }

  .pagination__page-next {
    cursor: pointer;
    ${({ theme }) => theme.typography.text14x18};
    text-align: right;
    margin-left: auto;
  }

  .pagination__page-next-link {
    display: flex;
    align-items: center;
    outline: none;

    svg {
      transform: rotate(-90deg);
    }

    p {
      color: ${({ theme }) => theme.colors.black};
      margin-right: 2px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      p {
        display: none;
      }
    }
  }

  .pagination__form {
    ${({ theme }) => theme.typography.text14x18}
    display: ${({ displayForm }) => displayForm};
    align-items: center;
    justify-content: flex-end;
    max-width: 40%;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 100%;
      justify-content: center;
    }
  }

  .pagination__label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .pagination__label-text {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: auto;
    }
  }

  .pagination__input {
    max-width: 77px;
    margin-left: 10px;
    margin-right: 10px;

    input {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &[type='number'] {
        -moz-appearance: textfield;
      }
    }
  }

  .pagination__button {
    max-width: 70px;
    width: 100%;
    padding: 5px 15px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      height: 40px;
    }
  }
`;

const BackButton: FC = () => {
  return (
    <>
      <ArrowDown />
      <p>Назад</p>
    </>
  );
};

const NextButton: FC = () => {
  return (
    <>
      <p>Вперед</p>
      <ArrowDown />
    </>
  );
};

interface CustomReactPaginateProps extends ReactPaginateProps {
  displayForm?: string;
  className?: string;
}

const Pagination: FC<CustomReactPaginateProps> = ({
  forcePage,
  pageCount,
  onPageChange,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 2,
  displayForm = 'flex',
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(forcePage);
  const { handleSubmit, register } = useForm();
  const onSubmit = handleSubmit((values) => {
    setCurrentPage(values.page);
    onPageChange && onPageChange({ selected: values.page - 1 });
  });

  return (
    <StyledPagination className={className} displayForm={displayForm}>
      <ReactPaginate
        previousLabel={<BackButton />}
        nextLabel={<NextButton />}
        breakLabel="..."
        forcePage={currentPage ? currentPage - 1 : 0}
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={onPageChange}
        containerClassName="pagination__container"
        activeClassName="pagination__page_active"
        pageClassName="pagination__page"
        activeLinkClassName="pagination__page-link_active"
        pageLinkClassName="pagination__page-link"
        previousClassName="pagination__page-prev"
        previousLinkClassName="pagination__page-prev-link"
        nextClassName="pagination__page-next"
        nextLinkClassName="pagination__page-next-link"
        breakClassName="pagination__break"
        disabledClassName="pagination__disabled"
      />
      <form className="pagination__form" onSubmit={onSubmit}>
        <label className="pagination__label">
          <p className="pagination__label-text">Перейти к странице</p>
          <Input
            name="page"
            min={0}
            max={pageCount}
            className="pagination__input"
            type="number"
            theme="small"
            ref={register({ required: 'Required' })}
          />
        </label>
        <Button className="pagination__button" type="submit">
          <ArrowRightIcon />
        </Button>
      </form>
    </StyledPagination>
  );
};

export default Pagination;
