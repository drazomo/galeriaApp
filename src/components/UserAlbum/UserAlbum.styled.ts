import styled from "styled-components";

export const ContainerFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;

  overflow-x: auto;
  width: 870px;

  div{
    margin-right: 0.5em;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const AlbumCover = styled.img`
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
  
  align-items: center;
  width: 112px;

  p {
    margin-top: 0.5em;
    font-size: 0.8em;
    text-align: center;
    width: 86px;
  }
`;