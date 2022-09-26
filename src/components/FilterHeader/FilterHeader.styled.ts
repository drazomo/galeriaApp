import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LinksContainer = styled.div`
display: flex;
`;

export const LinkItem = styled.div`
input[type='radio'] {
    display: none;

    :checked {
      + button{
        color: black;
      }
    }
  }
`;

export const LinkBtn = styled.button`
border: none;
background: white;
cursor: pointer;
color: ${theme.colors.textSecondaryGray};
font-weight: 500;

:not(last-child) {
  margin-right: 1em;
}
`

export const FilterControls = styled.div`
display: flex;
width: 870px;
margin-top: 1em;

div:first-child {
  margin-right: auto;
  align-self: center;
}
`;