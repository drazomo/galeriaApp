import styled, { css } from "styled-components";
import { device, size, theme } from '../../styles/theme';

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

  @media (min-width: ${size.laptop}) {
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  }

  @media (max-width: ${size.tablet}) {
    width: 700px
  }

  @media (max-width: ${size.mobileL}) {
    width: 400px
  }

  @media (max-width: ${size.mobileM}) {
    width: 360px
  }

  @media (max-width: ${size.mobileS}) {
    width: 300px
  }
`

export const CollectionButtonBar = styled.div`
display: flex;
justify-content: space-between;
width: 780px;
margin-bottom: 2em;

@media (max-width: ${size.tablet}) {
    width: 620px
}

@media (max-width: ${size.mobileL}) {
    width: 340px
}

@media (max-width: ${size.mobileM}) {
    width: 270px;
    margin-bottom: 16px;
}

@media (max-width: ${size.mobileS}) {
    width: 270px;
    margin-bottom: 0px;
}

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
  
  margin-left: 1em;
  margin-right: 1em;

  > div {
    margin-bottom: 1em;
  }

  > a {
    margin-bottom: 1em;
  }

  @media (min-width: ${size.laptop}) {
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  }

  @media (min-width: ${size.tablet}) {
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  }
  
  @media (min-width: ${size.mobileL}) {
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  }
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

  @media (max-width: ${size.mobileS}) {
      min-height: 300px;
  }
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

@media (max-width: ${size.mobileL}) {
  width: 85%;
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

@media ${device.tablet}{
    width: 265px;
    height: 265px;
}

@media ${device.mobileM}{
    width: 150px;
    height: 150px;
}

@media ${device.mobileS}{
    width: 120px;
    height: 120px;
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

  @media (max-width: ${size.mobileM}) {
      min-height: 0px;
  }
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

@media (max-width: ${size.tablet}) {
    width: 600px
}

@media (max-width: ${size.mobileM}) {
    width: 400px
}

@media (max-width: ${size.mobileS}) {
    width: 250px
}
`