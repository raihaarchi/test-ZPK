import { FC } from 'react';
import styled from 'styled/styled';

const StyledHeaderCell = styled.div`
  .cell__title {
    ${({ theme }) => theme.typography.text14x18}
    color: ${({ theme }) => theme.colors['semi-black']};
    margin-bottom: 5px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15}
    }
  }
`;

interface HeaderCellProps {
  title: string;
  children: React.ReactNode;
}

export const HeaderCell: FC<HeaderCellProps> = ({ title, children }) => {
  return (
    <StyledHeaderCell>
      <p className="cell__title">{title}</p>
      {children}
    </StyledHeaderCell>
  );
};

export default HeaderCell;
