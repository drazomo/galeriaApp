import styled from 'styled-components';

export const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 279.33px);
  grid-gap: 1em;

  margin-top: 1em;
  padding: 0;
  background-color: gray;
  width: 864px;
  height: 100%;
`;

export const MosaicBody = styled.div`
  img {
    border-radius: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const MosaicContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
