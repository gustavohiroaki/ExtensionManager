import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BottomBar,
  Extension,
  Name,
  Position,
  Sector,
} from './styles';

export default function Card({ CardData }) {
  return (
    <Container>
      <Position>{CardData.position}</Position>
      <Extension>{CardData.extension}</Extension>
      <Name>{CardData.name}</Name>
      <Sector>{CardData.sector.toUpperCase()}</Sector>
      <BottomBar color={CardData.color} />
    </Container>
  );
}

Card.propTypes = {
  CardData: PropTypes.shape({
    extension: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
