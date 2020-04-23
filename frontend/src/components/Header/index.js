import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export default function Header({ to, LinkName }) {
  return (
    <Container>
      <img src={Logo} alt="ExtensionLogo" />

      <Link to={to}>{LinkName}</Link>
    </Container>
  );
}

Header.propTypes = {
  LinkName: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
