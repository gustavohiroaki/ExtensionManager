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

export default function DetailsExtension({ route, navigation }) {
  const [sectors, setSectors] = useState([]);
  const [extension, setExtension] = useState();
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

  async function loadExtension() {
    const currentExtension = await api.get(
      // eslint-disable-next-line react/prop-types
      `/extension/${route.params.extensionNumber}`
    );
    const { data } = currentExtension;

    setExtension(data.extension.toString());
    setName(data.name);
    setPosition(data.position);
    setDescription(data.description);
    setSector(data.sector_id);

    console.tron.log(data.extension);
  }

  async function updateData() {
    const submit = await api.put(`/extension/${route.params.extensionNumber}`, {
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
        message: 'Dados atualizados com sucesso',
        type: 'success',
      });
    }
  }

  async function deleteData() {
    const submit = await api.delete(
      `/extension/${route.params.extensionNumber}`
    );
    if (submit.data.error) {
      showMessage({
        message: submit.data.error,
        type: 'warning',
      });
    } else {
      showMessage({
        message: 'Dados removidos com sucesso',
        type: 'success',
      });
    }

    navigation.goBack();
  }

  useEffect(() => {
    loadSectors();
    loadExtension();
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
              value={extension}
              disabled
              onChangeText={(text) => {
                setExtension(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="user-o" />}
              placeholder="Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="briefcase" />}
              placeholder="Cargo"
              value={position}
              onChangeText={(text) => {
                setPosition(text);
              }}
            />

            <Input
              leftIconContainerStyle={{ marginRight: 10 }}
              leftIcon={<FontAwesome name="file-text-o" />}
              placeholder="Description"
              value={description}
              onChangeText={(text) => {
                setDescription(text);
              }}
            />

            <RNPickerSelect
              onValueChange={(value) => setSector(value)}
              placeholder={{ label: 'Setor', value: null }}
              value={sector}
              style={{ ...pickerSelectStyles }}
              items={sectors}
            />

            <Button
              containerStyle={{ width: '100%' }}
              title="Atualizar"
              onPress={updateData}
            />
            <Button
              containerStyle={{ width: '100%' }}
              title="Deletar"
              buttonStyle={{ backgroundColor: 'red', marginTop: 15 }}
              onPress={deleteData}
            />
          </FormContainer>
        </AppContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
}
