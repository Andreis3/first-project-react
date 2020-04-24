import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38704247?s=460&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
            alt="Andrei Santos"
          />
          <div>
            <strong>andre/santos/unform</strong>
            <p>gostack-challenge-typeorm-upload</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38704247?s=460&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
            alt="Andrei Santos"
          />
          <div>
            <strong>andre/santos/unform</strong>
            <p>gostack-challenge-typeorm-upload</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38704247?s=460&u=4aae089250164c3650537a6ebc6e06e2508fab62&v=4"
            alt="Andrei Santos"
          />
          <div>
            <strong>andre/santos/unform</strong>
            <p>gostack-challenge-typeorm-upload</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
