import { FlatList, TextInput } from 'react-native';
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

export const SearchContainer = styled.View`
  width: 90%;
  height: 30px;
  background: white;
  border-radius: 10px;
  margin: 40px auto 0 auto;

  flex-direction: row;

  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 85%;
  font-size: 14px;
  margin-left: 10px;
`;

export const Loading = styled.Text`
  flex: 1;
  background-color: white;
  width: 90%;

  border-radius: 10px;
  margin: 20px auto 0 auto;
  padding: 10px 20px 50px 20px;

  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

export const ExtensionContainer = styled(FlatList)`
  flex: 1;
  background-color: white;
  width: 90%;

  border-radius: 10px;
  margin: 20px auto 0 auto;
  padding: 10px 20px 50px 20px;

  /* align-items: center; */
`;
