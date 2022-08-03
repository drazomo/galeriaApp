import styled from 'styled-components';

export const MosaicGrid = styled.div`
  width: 884px;

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
  }
`;

export const MosaicBody = styled.div`
  img {
    border-radius: 16px;
    width: 100%;
    display: block;
    margin-bottom: 1em;
  }
`;

export const MosaicContainer = styled.div`
  margin-top: 2em;
  margin-left: -6px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
