import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CardBase = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-end;
  background-color: ${theme.colors.textSecondaryGray};
  margin-left: 1em;
  height: 12em;
  border-radius: 10px;
  cursor: pointer;

  min-width: 9em;

  :last-child {
    margin-right: 1em;
  }

  @media (min-width: 768px) {
    :first-child {
      margin-left: 1em;
    }
    :last-child {
      margin-right: 1em;
    }
  }
`;

export const CardTitle = styled.h6`
  margin-bottom: 2em;
  width: 100%;
  text-align: center;
  color: ${theme.colors.backgroundWhite};
`;

export const CardCollectionContainer = styled.div`
  display: flex;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  min-height: 7.5em;
  overflow-x: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;
