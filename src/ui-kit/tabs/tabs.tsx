import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled/styled';

const StyledTabs = styled.div`
  display: flex;
  text-overflow: ellipsis;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

interface IStyledButton {
  isActive?: boolean;
}

const StyledLink = styled.a<IStyledButton>`
  ${({ theme }) => theme.typography.text18x20}
  position: relative;
  color: inherit;
  flex: 1;
  min-width: 0;
  padding-bottom: 16px;
  text-align: left;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    ${({ theme }) => theme.typography.text16x20}
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    ${({ theme }) => theme.typography.text14x18}
    padding-bottom: 10px;
    min-width: 122px;
  }

  &:not(:last-child) {
    margin-right: 25px;

    @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
      margin-right: 15px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::before {
    content: ${({ isActive }) => (isActive ? "''" : 'none')};
    display: block;
    position: absolute;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export type TabType = {
  title: string;
  link?: string;
  content?: React.ReactNode;
};

interface Tabs {
  items: TabType[];
  className?: string;
}

const Tabs: FC<Tabs> = ({ items, className }) => {
  const { asPath } = useRouter();

  return (
    <StyledTabs className={className}>
      {items.map(({ title, link }, index) => (
        <Link href={link ? link : '/'} passHref key={index}>
          <StyledLink isActive={asPath === link}>{title}</StyledLink>
        </Link>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
