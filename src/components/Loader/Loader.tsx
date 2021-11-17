import { FC } from 'react';
import styled from 'styled/styled';
import LoadingIcon from 'components/icons/loadingIcon';

const StyledLoading = styled(LoadingIcon)`
  position: absolute;
  top: 40px;
  right: 50%;
  transform: translateX(50%);
  color: ${({ theme }) => theme.colors.blue};
  max-width: 40px;
  z-index: 2;
`;

const Loader: FC<{ className?: string }> = ({ className }) => (
  <StyledLoading className={className} />
);

export default Loader;
