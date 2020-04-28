import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showMessage } from 'react-native-flash-message';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import { Input, Button } from 'react-native-elements';

import api from '../../services/api';

import logo from '../../assets/images/logo.png';
import { Container, Header, Logo, FormContainer, AppContainer } from './styles';

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    marginHorizontal: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 18,

    padding: 10,
  },
});

export default function NewExtension({ navigation }) {
  const [sectors, setSectors] = useState([]);
  const [extension, setExtension] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');

  async function loadSectors() {
    const data = await api.get('/sector');
    const tempSector = data.data;
    const tempArray = [];

    tempSector.map((sectorData) => {
      tempArray.push({
        label: sectorData.name,
        value: sectorData.id,
      });
    });

    setSectors(tempArray);
  }

  async function submitData() {
    const submit = await api.post('/extension', {
      extension,
      name,
      sector,
      position,
      description,
    });

    if (submit.data.error) {
      showMessage({
        message: submit.data.error,
        type: 'warning',
      });
    } else {
      showMessage({
        message: 'Dados inseridos com sucesso',
        type: 'success',
      });
    }
  }

  useEffect(() => {
    loadSectors();
  }, []);

  return (
    <Container>
      <KeyboardAwareScrollView enableOnAndroid extraScrollHeight={200}>
        <Header>
          <Logo source={logo} />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="angle-left" color="#FFF" size={34} />
          </TouchableOpacity>
        </Header>

        <AppContainer>
          <FormContainer>
            <Entypo name="new-message" color="#000" size={60} />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="phone" />}
              placeholder="Ramal"
              onChangeText={(text) => {
                setExtension(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="user-o" />}
              placeholder="Name"
              onChangeText={(text) => {
                setName(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="briefcase" />}
              placeholder="Cargo"
              onChangeText={(text) => {
                setPosition(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="file-text-o" />}
              placeholder="Description"
              onChangeText={(text) => {
                setDescription(text);
              }}
            />

            <RNPickerSelect
              onValueChange={(value) => setSector(value)}
              placeholder={{ label: 'Setor', value: null }}
              style={{ ...pickerSelectStyles }}
              items={sectors}
            />

            <Button
              containerStyle={{ width: '100%' }}
              title="Enviar"
              onPress={submitData}
            />
          </FormContainer>
        </AppContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
}
