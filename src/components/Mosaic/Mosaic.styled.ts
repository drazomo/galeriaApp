import styled from 'styled-components';
import { device } from '../../styles/theme';

export const MosaicGrid = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
  }
  .my-masonry-grid_column {
    padding-left: 1em; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 1em;
    border-radius: 16px;
    opacity: 1;
    transition: ease 0.5s;
  }

  @media ${device.mobileS}{
    width: 320px;
  }

  @media ${device.mobileM}{
    width: 375px;
  }

  @media ${device.tablet}{
    width: 768px;
  }

  @media ${device.laptop}{
    width: 884px;
  }
`;

export const MosaicBody = styled.div`
  cursor: pointer;
  transition: 0.5s ease;

  img {
    border-radius: 16px;
    width: 100%;
    display: block;
    margin-bottom: 1em;
    transition: 0.5s ease;
  }
`;

export const MosaicContainer = styled.div`
  margin-top: 2em;
  margin-left: -6px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface MosaicDivProps {
  opacity?: number;
  placeholderColor?: string;
}

export const MosaicDiv = styled.div<MosaicDivProps>`
opacity: ${props => props.opacity};
background-color: ${props => props.placeholderColor || 'gray'};
border-radius: 8px;
transition: 0.5s ease;
`;