/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container, NewExtensionForm, InputGroup } from './styles';

export default function NewExtension() {
  const [sectors, setSectors] = useState([]);
  const [extension, setExtension] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');

  async function loadSectors() {
    const data = await api.get('/sector');

    setSectors(data.data);
  }
  async function submitData(e) {
    e.preventDefault();
    const submit = await api.post('/extension', {
      extension,
      name,
      sector,
      position,
      description,
    });

    if (submit) {
      if (submit) {
        alert('Cadastrado com sucesso!');
      } else {
        alert('Falha no cadastro, tente novamente mais tarde');
      }
    }
  }

  useEffect(() => {
    loadSectors();
  }, []);

  return (
    <>
      <Header to="/" LinkName="Voltar" />
      <Container>
        <h1>Novo Ramal</h1>

        <NewExtensionForm onSubmit={submitData}>
          <InputGroup>
            <input
              type="text"
              id="extension"
              placeholder="Ramal"
              value={extension}
              onChange={(e) => setExtension(e.target.value)}
            />
            <input
              type="text"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <input
            type="text"
            id="position"
            placeholder="Cargo"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <select
            name="sector"
            id="sector"
            onChange={(e) => setSector(e.target.value)}
          >
            <option key={null} value={null}>
              Selecione o Setor
            </option>
            {sectors.map((sectorData) => (
              <option key={sectorData.id} value={sectorData.id}>
                {sectorData.name}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Descrição"
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          <button type="submit">Enviar</button>
        </NewExtensionForm>
      </Container>
    </>
  );
}
