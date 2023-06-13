import { SiteNavList } from './SiteNav.styled';
import { NavLink } from './SiteNav.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function SiteNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <SiteNavList>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {isLoggedIn && (
        <div>
          / <NavLink to="/contacts">Contacts</NavLink>
        </div>
      )}
    </SiteNavList>
  );
}
