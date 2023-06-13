import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import {
  UserMenuWrap,
  LogoutButton,
  AvatarImage,
  AvatarLetter,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const firstCharEmail = email.charAt(0).toUpperCase();
  return (
    <UserMenuWrap>
      <AvatarImage>
        <AvatarLetter>{firstCharEmail}</AvatarLetter>
      </AvatarImage>
      <div>Hello,</div>
      <div> {email} </div>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </UserMenuWrap>
  );
}
