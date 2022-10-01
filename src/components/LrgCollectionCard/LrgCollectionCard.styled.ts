import styled, { css } from "styled-components";
import { theme } from '../../styles/theme';

interface DisplayImageProps {
  imageCSS?: {}
  hoverEffect?: boolean
}

interface LrgImgContainerProps {
  imageContainerCSS?: {}
}

export const CollectionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.backgroundWhite};

  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;

  border-radius: 8px;
  width: 870px;
  height: auto;

  .description {
    margin-top: 1em;
    width: 92%;

    p {
      font-weight: 500;
    }
  }
`

export const CollectionButtonBar = styled.div`
display: flex;
justify-content: space-between;
width: 780px;
margin-bottom: 2em;

.likesDiv {
  display: flex;

  p {
    margin-left: 8px;
    color: ${theme.colors.heartColor}
  }
}
`

export const ImgArea = styled.img<DisplayImageProps>`
  cursor: pointer;
  border-radius: 8px;
  min-width: 100%;
  object-fit: cover;
  ${(props) => props.imageCSS}
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 2em;

  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 2em;
`;

export const ImgGridArea = styled.img<DisplayImageProps>`
  background-color: gray;
  cursor: pointer;
  border-radius: 8px;
  width: 265px;
  height: 265px;
  transition: .5s ease;
  backface-visibility: hidden;

  ${(props) => props.imageCSS}
`;

export const defaultImageCSS = css`
  width: 100%;
  height: 100%;
  min-height: 530px;
`;

export const portraitImageCSS = css`
  width: 100%;
  height: 100%;
  max-height: 800px;
`;

export const LrgImgContainer = styled.div<LrgImgContainerProps>`
position: relative;
${props => props.imageContainerCSS}

padding-left: 35px;
padding-right: 35px;

margin-top: 1em;
margin-bottom: 1.5em;
`

export const InfoBox = styled.div`
display: flex;
justify-content: space-between;


width: 90%;
margin-left: 2em;
margin-right: auto;

.detailsDiv {
  cursor: pointer;
  display: flex;
  align-items: center;
}
`

export const InfoUsrContainer = styled.a`
text-decoration: none;
color: black;
display: flex;
margin-top: 1.5em;

.usrInfo {
  margin-top: 0.5em;
  margin-left: 1em;

  p{
    font-size: 0.8rem;
  }
  
  p:first-child {
    font-weight: 600;
  }

  p:nth-child(2) {
    font-weight: 200;
  }
}
`

export const InfoUsrImg = styled.div`
background-color: gray;

border-radius: 8px;
width: 57px;
height: 57px;
`

export const ImgGridDiv = styled.div<DisplayImageProps>`
cursor: pointer;
border-radius: 8px;
width: 265px;
height: 265px;
position: relative;
overflow: hidden;

  :hover img {
    opacity: ${(props) => props.hoverEffect ? 0.3 : 1};
  }

  :hover div {
    opacity: ${(props) => props.hoverEffect ? 1 : 0};
  }
`;

export const Overlay = styled.div`
transition: .5s ease;
opacity: 0;

position: absolute;
top: 50%;
left: 50%;

transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
text-align: center;

p {
  font-size: 1.5em;
  font-weight: 500;
  color: black;
}
`;

export const defaultImageContainerCSS = css`
  width: 100%;
  height: 100%;
  min-height: 530px;
`;

interface ImagePlaceholderProps {
  opacity: number;
  placeholderColor: string;
}

export const ImagePlaceholder = styled.div<ImagePlaceholderProps>`
position: absolute;
width: 100%;
height: 100%;
opacity: ${props => props.opacity};
background-color: ${props => props.placeholderColor || 'gray'};
width: 800px;
border-radius: 8px;
transition: 0.5s;
`