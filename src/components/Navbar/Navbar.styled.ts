import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  width: 100%;
  background-color: inherit;
  height: 5em;
`;

export const NavSearchBar = styled.input`
  margin-left: auto;
  width: 55%;
  height: 2.8em;
  border: none;
  border-radius: 5px;
`;

export const NavIcnContainer = styled.div`
  margin-left: auto;
`;

export const NavIconBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  background-color: ${theme.colors.backgroundWhite};

  :nth-child(2) {
    margin: 0 0.4em;
  }

  :nth-child(3) {
    margin-right: 0.5em;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
