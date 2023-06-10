import { NavigationStyled } from './Navigation.styled';
import SiteNav from 'components/SiteNav/SiteNav';
import Auth from 'components/Auth/Auth';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Navigation() {
  return (
    <NavigationStyled>
      <li>
        <SiteNav />
      </li>
      <li>
        <Auth />
      </li>
      <li>
        <UserMenu />
      </li>
    </NavigationStyled>
  );
}
