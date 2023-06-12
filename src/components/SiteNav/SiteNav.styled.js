import styled from 'styled-components';
import { NavLink as LinkName } from 'react-router-dom';

export const SiteNavList = styled.ul`
  display: flex;
  gap: 5px;
`;

export const NavLink = styled(LinkName)`
  color: black;
  text-decoration: none;

  :hover {
    color: red;
  }
`;
