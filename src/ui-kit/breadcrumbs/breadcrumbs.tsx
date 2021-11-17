import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled/styled';
import ArrowDown from 'components/icons/arrowDown';
import { Url } from 'url';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  .breadcrumbs__list {
    display: flex;
    align-items: center;
  }

  .breadcrumbs__item {
    ${({ theme }) => theme.typography.text12x15};
    display: flex;
    align-items: center;
    margin-right: 10px;

    &:first-of-type {
      .breadcrumbs__arrow {
        display: none;
      }
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;

      &:last-of-type {
        display: flex;

        .breadcrumbs__arrow {
          display: initial;
          color: ${({ theme }) => theme.colors.blue};
          transform: rotate(90deg);
          margin-right: 5px;
        }
      }
    }

    a {
      color: ${({ theme }) => theme.colors.black};

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  .breadcrumbs__arrow {
    max-width: 10px;
    max-height: 6px;
    transform: rotate(-90deg);
    margin-bottom: 5px;
    margin-right: 10px;
  }
`;

export type BreadcrumbsLink = {
  name: string;
  link: { pathname: string; query?: unknown };
};

interface BreadcrumbsProps {
  className?: string;
  links: BreadcrumbsLink[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className, links }) => {
  return (
    <StyledContainer className={className}>
      <ul className="breadcrumbs__list">
        {links.map(({ name, link }) => (
          <li className="breadcrumbs__item" key={name}>
            <ArrowDown className="breadcrumbs__arrow" />
            <Link href={link as Url}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default Breadcrumbs;
