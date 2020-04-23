import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 150px;

  background-color: #c4c4c4;

  position: relative;
`;

export const SideBar = styled.div`
  position: absolute;
  height: 100%;
  width: 5px;

  background-color: ${(props) => props.color};
`;

export const Position = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const Extension = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;

  color: rgba(0, 0, 0, 0.35);

  font-weight: bold;
  font-size: 36px;
`;
export const Name = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;

  font-weight: bold;
  font-size: 16px;
`;
export const Sector = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;

  color: rgba(0, 0, 0, 0.35);

  font-weight: bold;
  font-size: 14px;
`;
