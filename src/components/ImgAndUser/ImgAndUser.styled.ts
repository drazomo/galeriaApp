import styled from "styled-components";
import { theme } from "../../styles/theme";

export const UserInfoContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;

width: 400px;
`;

export const UserPhoto = styled.img`
height: 150px;
width: 160px;

background-color: grey;
border-radius: 8px;
margin-top: 2em;
`;

export const UserName = styled.h3`
margin-top: 0.5em;
font-weight: 600;
`;

export const UserLink = styled.a`
text-decoration: none;
color: ${theme.colors.textSecondaryGray};
`;

export const StatContainer = styled.div`
display: flex;
width: 100%;

margin-top: 1em;
justify-content: space-evenly;
`;

export const StatBox = styled.div`
display: flex;
flex-direction: column;
`;

export const StatNumber = styled.h3`
font-weight: 600;
`;

export const StatCategory = styled.h3`
color: ${theme.colors.textSecondaryGray};
`