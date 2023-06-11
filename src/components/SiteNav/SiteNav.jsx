import { SiteNavList } from './SiteNav.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export default function SiteNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <SiteNavList>
      <li>
        <Link to="/">Home</Link>
      </li>

      {isLoggedIn && (
        <div>
          / <Link to="/contacts">Contacts</Link>
        </div>
      )}
    </SiteNavList>
  );
}
