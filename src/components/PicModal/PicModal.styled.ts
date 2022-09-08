import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalBkg = styled.div`
width: 100%;
height: 100%;
  background-color: rgba(200, 200, 200, .7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;

  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  margin: auto;
  max-height: 890px;
  max-width: 830px;
  padding-left: 32px;
  padding-right: 37px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
  border-radius: 8px;
  min-width: 600px;
`;

export const DownloadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-bottom: 2em;
`;

export const DownloadBtn = styled.button`
  cursor: pointer;
  width: 35%;
  height: 35px;

  display: flex;
  justify-content: space-evenly;
  padding-top: 7px;
  border-radius: 8px;
  border-color: ${theme.colors.btnBlue};

  background-color: ${theme.colors.btnBlue};
  color: ${theme.colors.backgroundWhite};
`;