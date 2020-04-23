import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NewExtensionForm = styled.form`
  width: 40%;
  min-width: 300px;
  padding: 25px;

  background-color: #c4c4c4;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  input,
  textarea,
  select {
    border-radius: 6px;
    margin-bottom: 10px;
  }

  button {
    background-color: #3c4f76;
    border: 0;
    color: white;
    padding: 10px;
    border-radius: 6px;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: row;

  input {
    width: 45%;
  }
`;
