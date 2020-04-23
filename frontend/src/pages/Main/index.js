import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';

import {
  Container,
  SearchContainer,
  ExtensionContainer,
  ExtensionList,
} from './styles';

export default function Main() {
  const [extensions, setExtensions] = useState([]);
  const [search, setSearch] = useState([]);

  async function loadExtensions() {
    const extensionsFromApi = await api.get('extension');

    setExtensions(
      extensionsFromApi.data.filter((obj) => {
        return (
          obj.extension.toString().indexOf(search) > -1 ||
          obj.name.toString().toLowerCase().indexOf(search) > -1
        );
      })
    );
  }

  useEffect(() => {
    loadExtensions();
  }, [search]);

  return (
    <>
      <Header to="/new/extension" LinkName="Novo Ramal" />

      <Container>
        <SearchContainer>
          <IoIosSearch color="#ddd" />
          <input
            type="text"
            placeholder="Busca"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </SearchContainer>
        <ExtensionContainer style={{ background: '#ddd' }}>
          <ExtensionList>
            {extensions.map((extension) => (
              <Card
                CardData={{
                  extension: extension.extension,
                  name: extension.name,
                  position: extension.position,
                  description: extension.description,
                  sector: extension.sector,
                  color: extension.color,
                  id: extension.id,
                }}
                key={extension.extension}
              />
            ))}
          </ExtensionList>
        </ExtensionContainer>
      </Container>
    </>
  );
}
