import styled from "styled-components";

export const Container = styled.div`
  width: 870px;
`;

export const AlbumCover = styled.div`
  width: 86px;
  height: 86px;

  border-radius: 8px;
  background-color: grey;
`;

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  overflow-x: auto;
  
  align-items: center;
  width: 112px;

  p {
    margin-top: 0.5em;
    font-size: 0.8em;
    text-align: center;
    width: 86px;
  }
`;