import { NavigationStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import SiteNav from 'components/SiteNav/SiteNav';
import Auth from 'components/Auth/Auth';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationStyled>
      <SiteNav />

      {isLoggedIn ? <UserMenu /> : <Auth />}
    </NavigationStyled>
  );
}
