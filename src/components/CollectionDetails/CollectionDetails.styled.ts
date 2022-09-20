import styled from "styled-components";
import {theme} from '../../styles/theme'

export const CollectionDetailsContainer = styled.div`
display: flex;
align-items: center;
width: 870px;
`;

export const CollectionImg = styled.img`
width: 183px;
height: 183px;
border-radius: 8px;

background-color: grey;
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
`;

export const PostsText = styled.h3`
color: ${theme.colors.textSecondaryGray};
margin: 0.3em 0;
`;