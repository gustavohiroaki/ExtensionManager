import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  SideBar,
  Position,
  Extension,
  Name,
  Sector,
} from './styles';

export default function Card({ CardData }) {
  const history = useHistory();

  function handleClick(extension) {
    history.push(`/details/extension/${extension}`);
  }

  return (
    <Container onClick={() => handleClick(CardData.extension)}>
      <SideBar color={CardData.color} />
      <Position>{CardData.position}</Position>
      <Extension>{CardData.extension}</Extension>
      <Name>{CardData.name}</Name>
      <Sector>{CardData.sector.toUpperCase()}</Sector>
    </Container>
  );
}

Card.propTypes = {
  CardData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
