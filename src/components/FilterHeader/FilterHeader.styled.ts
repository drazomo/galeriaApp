import styled from "styled-components";
import { device, theme } from "../../styles/theme";

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
margin-top: 1em;

@media ${device.mobileS}{
    width: 300px;
    margin-left: 1em;
  }
  
@media ${device.mobileM}{
    width: 375px;
  }

@media ${device.tablet}{
    width: 700px;
  }

@media ${device.laptop}{
    width: 870px;
  }

div:first-child {
  margin-right: auto;
}

div {
  align-self: center;
}
`;