import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/auth-operations';
import { Avatar, UserEmail, MenuWrapper } from './UserMenu.styled';
import { Button } from '../Button/Button.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const avatarLetter = user.email.slice(0, 1).toUpperCase();

  return (
    <MenuWrapper>
      <Avatar>{avatarLetter}</Avatar>
      <UserEmail>{user.email}</UserEmail>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </MenuWrapper>
  );
};
