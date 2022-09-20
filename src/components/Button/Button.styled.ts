import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Button = styled.button`
cursor: pointer;
background-color: ${theme.colors.btnBlue};
color: ${theme.colors.backgroundWhite};

border-radius: 8px;
border: none;

padding: 1em;
width: 150px;
`