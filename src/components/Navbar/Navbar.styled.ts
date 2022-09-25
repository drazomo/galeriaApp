import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: inherit;
  height: 5em;

  .searchBarContainer {
    position: relative;
    margin-left: auto;
    width: 55%;
    height: 2.4em;
  }

  .searchIcnContainer {
    cursor: pointer;
    position: absolute;
    left: 0.5em;
    top: 0.6em;
    border: none;
    background-color: inherit;
  }

  @media (min-width: 768px) {
    margin: 1em 0 0 auto;
    .searchBarContainer {
      width: 508px;
    }

    .searchIcnContainer {
      top: 0.1em;
      left: 1em;
    }
  }

  @media (min-width: 1024px) {
    margin: 1em 0 0 auto;

    .searchBarContainer {
      height: 5.5em;
      box-shadow: rgba(17, 17, 26, 0.03) 0px 1px 0px;
      width: 644px;
      top: 24px;
    }

    .searchIcnContainer {
      position: absolute;
      left: 1em;
      top: 2px;
    }
  }
`;

export const NavSearchBar = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 8px;
  border: none;

  padding-left: 3em;

  @media (min-width: 426px) {
    margin-top: -1em;
    width: 100%;
    height: 3.8em;

    padding-left: 4em;
  }
`;

export const NavIcnContainer = styled.div`
  margin-left: 0.5em;
  display: flex;

  @media (min-width: 768px) {
    margin-left: 24px;
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
  border-radius: 8px;
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
