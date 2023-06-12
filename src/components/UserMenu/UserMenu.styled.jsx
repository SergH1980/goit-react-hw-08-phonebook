import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const LogoutButton = styled.button`
  max-width: 120px;
  margin-top: 5px;

  padding: 7px 10px;

  border: none;
  border-radius: 8px;

  background-color: #1f86cf;
  color: white;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition-duration: 300ms;
  transition-property: background-color, color;
  cursor: pointer;

  :hover {
    background-color: #d7b7e4;
    color: black;
  }
`;

export const AvatarImage = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #bcf0b6;

  position: relative;
`;

export const AvatarLetter = styled.span`
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 30px;
  font-style: oblique 10deg;
  color: red;
`;
