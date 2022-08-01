import styled from 'styled-components';

export const MosaicGrid = styled.div`
  columns: 3 100px;
  column-gap: 1em;

  margin-top: 1em;
  padding: 0;
  background-color: gray;
  width: 864px;
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
  display: flex;
  justify-content: center;
  width: 100%;
`;
