import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #3c4f76;
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 15px;
    height: 35px;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 30px;
    background-color: #94c595;
    margin-right: 10px;
    border-radius: 6px;

    transition: background-color 150ms;
  }

  a:hover {
    background-color: ${darken(0.1, '#94c595')};
  }
`;
