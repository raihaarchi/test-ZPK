import Link from 'next/link';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';

const StyledUserProfileEdit = styled.div`
  max-width: 323px;
  margin-left: 20px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    max-width: 157px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-left: 0;
    max-width: unset;
  }
`;

const StyledButton = styled(Button)`
  width: 149px;
  margin-bottom: 22px;
  min-height: 40px;
  padding: 0 !important;
  a {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
      padding: 0 15px;
    }
  }

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    width: 100%;
  }
`;

const UserProfileEdit = () => {
  const lkLink = String(process.env.NEXT_PUBLIC_SVETA_AUTH_AUTHORITY);

  return (
    <StyledUserProfileEdit>
      <StyledButton>
        <Link href={lkLink}>Редактировать</Link>
      </StyledButton>
      Для изменения данных вы будете перенаправлены в личный кабинет
    </StyledUserProfileEdit>
  );
};

export default UserProfileEdit;
