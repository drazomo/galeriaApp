import styled from "styled-components";
import { size, theme } from '../../styles/theme'

export const CollectionDetailsContainer = styled.div`
display: flex;
align-items: center;
width: 870px;

@media (max-width: ${size.tablet}){
  width: 700px;
}

@media (max-width: ${size.mobileL}){
  width: 400px;
}

@media (max-width: ${size.mobileM}){
  width: 340px;
}

@media (max-width: ${size.mobileS}){
  width: 310px;
}
`;

export const CollectionImg = styled.img`
background-color: grey;
cursor: pointer;
object-fit: cover;

width: 183px;
height: 183px;
border-radius: 8px;
`;

export const CollectionInfoBx = styled.div`
margin-left: 3em;

h2 {
  font-weight: 600;
}

p {
  margin-top: 0.7em;
  font-weight: 600;
}

@media (max-width: ${size.mobileL}){
  p {
    font-weight: 400;
  }
}

@media (max-width: ${size.mobileM}){
margin-left: 2em;
  p {
    display: none;
  }
}

@media (max-width: ${size.mobileS}){
margin-left: 1em;
  p {
    display: none;
  }
}
`;

export const PostsText = styled.h3`
color: ${theme.colors.textSecondaryGray};
margin: 0.3em 0;
`;