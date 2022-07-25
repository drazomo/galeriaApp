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

  .searchBarContainer {
    position: relative;
    margin-left: auto;
    width: 55%;
    height: 2.4em;
  }

  .searchIcn {
    position: absolute;
    left: 0.5em;
    top: 0.4em;
  }

  @media (min-width: 426px) {
    background-color: ${theme.colors.navBarDestopBkg};
  }
  height: 5.5em;
  box-shadow: rgba(17, 17, 26, 0.03) 0px 1px 0px;

  .searchBarContainer {
    position: relative;
    margin-left: auto;
    width: 40%;
    height: 2.4em;
  }

  .searchIcn {
    position: absolute;
    left: 1em;
    top: 0.2em;
  }
`;

export const NavSearchBar = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;

  padding-left: 4em;

  @media (min-width: 426px) {
    margin-top: -1em;
    width: 100%;
    height: 3.8em;
  }
`;

export const NavIcnContainer = styled.div`
  margin-left: auto;
  display: flex;

  @media (min-width: 426px) {
    margin-left: 1em;
    margin-right: auto;
  }
`;

export const NavIconTitle = styled.div`
  display: none;

  @media (min-width: 426px) {
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: center;
    color: ${theme.colors.textSecondaryGray};
  }
`;

export const NavIconBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  background-color: ${theme.colors.backgroundWhite};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 426px) {
    padding: 1em;
  }
`;

export const NavIconItem = styled.div`
  //https://stackoverflow.com/questions/41425736/change-background-when-radio-button-clicked
  input[type='radio'] {
    display: none;

    :checked {
      + button.cls__icn_btn_photos {
        background-color: ${theme.colors.selectHoverFotosIcn};
      }

      + button.cls__icn_btn_heart {
        background-color: ${theme.colors.selectHoverSavedIcn};
      }
    }
  }

  .cls__icn_btn_photos {
    :hover {
      background-color: ${theme.colors.selectHoverFotosIcn};
    }
  }

  .cls__icn_btn_heart {
    margin: 0 0.4em;

    :hover {
      background-color: ${theme.colors.selectHoverSavedIcn};
    }
  }

  .cls__icn_btn_theme {
    margin-right: 0.5em;
  }

  @media (min-width: 426px) {
    .cls__icn_btn_heart {
      margin: 0 1em;
    }
  }
`;
