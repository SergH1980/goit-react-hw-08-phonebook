import { AuthList } from './Auth.styled';
import { NavLink } from './Auth.styled';

export default function Auth() {
  return (
    <AuthList>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>/</li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </AuthList>
  );
}
