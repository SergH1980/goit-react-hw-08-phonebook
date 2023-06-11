import { SiteNavList } from './SiteNav.styled';
import { Link } from 'react-router-dom';

export default function SiteNav() {
  return (
    <SiteNavList>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div>
        / <Link to="/contacts">Contacts</Link>
      </div>
    </SiteNavList>
  );
}
