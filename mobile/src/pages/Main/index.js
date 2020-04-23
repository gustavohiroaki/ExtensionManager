/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/images/logo.png';

import Card from '../../components/Card';
import {
  Container,
  Header,
  Logo,
  ExtensionContainer,
  SearchContainer,
  Input,
  Loading,
} from './styles';
import api from '../../services/api';

export default function Main({ navigation }) {
  const [extensions, setExtensions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  async function loadExtensions() {
    setLoading(true);
    const extensionsFromApi = await api.get('extension');

    setExtensions([]);

    setExtensions(
      extensionsFromApi.data.filter((obj) => {
        return (
          obj.extension.toString().indexOf(search) > -1 ||
          obj.name.toString().toLowerCase().indexOf(search) > -1
        );
      })
    );

    setLoading(false);
  }

  useEffect(() => {
    loadExtensions();
  }, [search]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('NewExtension');
          }}
        >
          <AntDesign name="pluscircleo" color="#FFF" size={34} />
        </TouchableOpacity>
      </Header>

      <SearchContainer>
        <Input
          placeholder="Busca"
          onChangeText={(e) => setSearch(e.toLowerCase())}
        />
      </SearchContainer>

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <ExtensionContainer
          data={extensions}
          keyExtractor={(item) => item.extension.toString()}
          renderItem={({ item }) => <Card CardData={item} />}
          refreshing={refreshing}
          onRefresh={() => {
            loadExtensions();
            setSearch('');
          }}
        />
      )}
    </Container>
  );
}
