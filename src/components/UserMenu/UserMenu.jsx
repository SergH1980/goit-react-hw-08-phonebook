import { UserMenuWrap, LogoutButton } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  return (
    <UserMenuWrap>
      <div>Hello,</div>
      <div> {email} </div>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </UserMenuWrap>
  );
}
