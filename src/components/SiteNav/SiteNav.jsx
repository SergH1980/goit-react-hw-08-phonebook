import { SiteNavList } from './SiteNav.styled';
import { Link } from 'react-router-dom';
export default function SiteNav() {
  return (
    <SiteNavList>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>/</li>
      <Link to="/contacts">Contacts</Link>
    </SiteNavList>
  );
}
