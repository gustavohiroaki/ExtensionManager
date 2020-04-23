import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #c4c4c4;
  width: 100%;
  height: 30%;
  border-radius: 5px;

  margin: 0 auto 10px auto;
  padding: 10px 0;

  align-items: center;
`;

export const BottomBar = styled.View`
  height: 3%;
  width: 100%;

  background-color: ${(props) => props.color};

  position: absolute;
  bottom: 0;
  border-radius: 5px;
`;

export const Position = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;
export const Extension = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: #444;
`;
export const Name = styled.Text`
  font-size: 18px;
  color: #444;
`;
export const Sector = styled.Text`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.44);
`;
