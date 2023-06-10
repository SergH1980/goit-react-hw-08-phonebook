import { UserMenuWrap, LogoutButton } from './UserMenu.styled';

export default function UserMenu() {
  return (
    <UserMenuWrap>
      <div>Hello,</div>
      <div>serg.galaka@gmail.com</div>
      <LogoutButton type="button">Logout</LogoutButton>
    </UserMenuWrap>
  );
}
