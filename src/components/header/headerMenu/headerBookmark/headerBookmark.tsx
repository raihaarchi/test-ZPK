import { FC } from 'react';
import BookmarkIcon from 'components/icons/bookmarkIcon';
import styled from 'styled/styled';
import Link from 'next/link';

const StyledLink = styled.a`
  cursor: pointer;
  position: relative;
  display: flex;

  &:hover {
    .header-bookmark__icon {
      fill: ${({ theme }) => theme.colors.white};
    }

    .header-bookmark__hint {
      transition-delay: 1s;
      opacity: 1;
      visibility: visible;
    }
  }

  .header-bookmark__hint {
    ${({ theme }) => theme.typography.text10x12};

    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -18px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  .header-bookmark__count {
    ${({ theme }) => theme.typography.text10x15};
    position: absolute;
    top: -10px;
    right: -11px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 100%;
    width: 22px;
    height: 22px;
    padding: 4px 0 3px;
  }
`;

const HeaderBookmark: FC<{ className?: string; count?: number }> = ({
  className,
  count,
}) => {
  return (
    <Link href="/favorites">
      <StyledLink className={className}>
        {count && (
          <p className="header-bookmark__count">
            <span>{count}</span>
          </p>
        )}
        <BookmarkIcon className="header-bookmark__icon" />
        <p className="header-bookmark__hint">Избранное</p>
      </StyledLink>
    </Link>
  );
};

export default HeaderBookmark;
