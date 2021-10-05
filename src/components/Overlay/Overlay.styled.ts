import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  // height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  // background-color: yellow;
  z-index: 2;
  padding: 2em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
