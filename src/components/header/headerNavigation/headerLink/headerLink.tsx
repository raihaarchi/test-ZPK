import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled/styled';
import { useRouter } from 'next/router';

const StyledHeaderLink = styled.li<{ isActive: boolean }>`
  margin-right: 28px;
  transition: 0.3s;
  opacity: ${({ isActive }) => (isActive ? '0.5' : '1')};

  &:hover {
    transition: 0.3s;
    opacity: 0.5;
  }

  &::last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.desktop}) {
    margin-right: 15px;
    margin-bottom: 8px;
  }
`;

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ children, href, className }) => {
  const { asPath } = useRouter();
  return (
    <StyledHeaderLink className={className} isActive={asPath === href}>
      <Link href={href}>{children}</Link>
    </StyledHeaderLink>
  );
};

export default HeaderLink;
