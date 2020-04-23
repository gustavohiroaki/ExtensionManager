import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;

  display: flex;

  flex-direction: column;
`;

export const SearchContainer = styled.div`
  padding: 5px;
  width: 15%;

  margin-left: 5%;

  display: flex;
  align-items: center;

  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    height: 30px;
  }
`;

export const ExtensionContainer = styled.div`
  border-radius: 6px;

  margin: 0 auto;
  padding: 15px;

  width: 90%;
  height: 60vh;

  overflow: scroll;
`;

export const ExtensionList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    margin: 0 auto 10px auto;
  }
`;
