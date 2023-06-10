import { AuthList } from './Auth.styled';
import { Link } from 'react-router-dom';

export default function Auth() {
  return (
    <AuthList>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>/</li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </AuthList>
  );
}
