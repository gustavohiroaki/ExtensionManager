import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import logo from '../../assets/images/logo.png';
import { Container, Header, Logo, FormContainer, AppContainer } from './styles';

export default function NewExtension({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="back" color="#FFF" size={34} />
        </TouchableOpacity>
      </Header>
      <AppContainer>
        <FormContainer>
          {/* <Entypo name="new-message" color="#000" size={60} /> */}
        </FormContainer>
      </AppContainer>
    </Container>
  );
}
