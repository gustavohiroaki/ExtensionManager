import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;

  background-color: #3c4f76;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Logo = styled.Image``;

export const AppContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export const FormContainer = styled.View`
  background-color: white;
  width: 90%;
  height: 70%;

  border-radius: 10px;
  margin: 20px auto 0 auto;
  padding: 10px 20px 50px 20px;

  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
