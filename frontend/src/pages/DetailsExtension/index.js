/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import { Container, DetailExtensionForm, InputGroup } from './styles';

export default function DetailsExtension(props) {
  const history = useHistory();
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

  async function loadExtension() {
    const currentExtension = await api.get(
      // eslint-disable-next-line react/prop-types
      `/extension/${props.match.params.extension}`
    );
    const { data } = currentExtension;

    setExtension(data.extension);
    setName(data.name);
    setPosition(data.position);
    setDescription(data.description);
    setSector(data.sector_id);
  }
  async function updateData(e) {
    e.preventDefault();
    const update = await api.put(`/extension/${extension}`, {
      name,
      sector,
      position,
      description,
    });

    if (update) {
      alert('Atualizado com sucesso!');
    } else {
      alert('Falha na atualização, tente novamente mais tarde');
    }
  }

  async function deleteData(e) {
    e.preventDefault();

    const remove = await api.delete(`/extension/${extension}`);

    if (remove) {
      alert('Ramal removido com sucesso');
      history.push('/');
    }
  }

  useEffect(() => {
    loadSectors();
    loadExtension();
  });

  return (
    <>
      <Header to="/" LinkName="Voltar" />
      <Container>
        <h1>Detalhes do Ramal</h1>

        <DetailExtensionForm onSubmit={updateData}>
          <InputGroup>
            <input
              type="text"
              id="extension"
              placeholder="Ramal"
              disabled
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
            value={sector.toString()}
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

          <button type="submit">Atualizar</button>
          <button type="button" onClick={deleteData}>
            Deletar
          </button>
        </DetailExtensionForm>
      </Container>
    </>
  );
}
