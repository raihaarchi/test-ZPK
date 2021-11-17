import styled from 'styled/styled';
import Select from 'ui-kit/select/select';
import React, { FC, useEffect, useState } from 'react';
import { fetchDigestMagazines } from 'api/integration-api';
import Questions from 'components/indexPage/questions/questions';
import { OptionTypeBase, GroupType } from 'react-select/src/types';
import { Issue } from 'types/issue';

const StyledDigestPageContent = styled.section`
  padding-top: 0px;

  .issues {
    :before {
      width: 100%;
      content: '';
      height: 2px;
      background: ${({ theme }) => theme.colors.black};
    }
    display: flex;
    flex-direction: column;
    margin: 0 0 170px 0;
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin: 0 0 130px 0;
    }
    &__select {
      max-width: 130px;
      margin-top: 25px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex: 0 1 25%;
      margin: 45px 10% 0 0;
      :nth-child(3n) {
        margin-right: 0;
      }
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        flex-basis: 30%;
        margin: 60px 5% 0 0;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        flex-basis: 55%;
        min-width: 213px;
        margin: 50px 0 0 0;
      }
    }
    &__img {
      width: 100%;
      height: calc(width * 1.4);
    }
    &__name {
      ${({ theme }) => theme.typography.text30x30}
      margin-top: 30px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text18x25}
        margin-top: 20px;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 15px;
      }
    }
    &__date {
      ${({ theme }) => theme.typography.text18x25}
      margin-top: 15px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18}
        margin-top: 10px;
      }
    }
  }
`;

const selectOptions: GroupType<OptionTypeBase> = {
  options: [
    { value: 'sort_by=desc', label: 'Сначала новые' },
    { value: 'sort_by=asc', label: 'Сначала старые' },
  ],
};

const DigestPageContent: FC = () => {
  const [selectedSort, setSelectedSort] = useState<OptionTypeBase>(
    selectOptions.options[0],
  );

  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchDigestMagazines(selectedSort.value);
      setIssues(data);
    })();
  }, [selectedSort]);

  return (
    <StyledDigestPageContent>
      <div className="wrapper">
        <div className="issues">
          <Select
            className="issues__select"
            placeholder="Cначала новые"
            options={selectOptions.options}
            value={selectedSort}
            onChange={(value) => value && setSelectedSort(value)}
          />
          <div className="issues__list">
            {issues.map(({ id, title, published_at, image_path }) => (
              <div className="issues__item" key={id}>
                <img className="issues__img" src={image_path} alt={title} />
                <p className="issues__name">{title}</p>
                <p className="issues__date">{published_at}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Questions isWhite />
    </StyledDigestPageContent>
  );
};

export default DigestPageContent;
