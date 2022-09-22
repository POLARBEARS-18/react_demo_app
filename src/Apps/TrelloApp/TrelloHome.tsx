import { css } from '@emotion/react';
import React from 'react';
import { Header } from './components/Header';
import { TaskCards } from './components/tasks/TaskCards';

export const TrelloHome = () => (
  <div css={[SImg]}>
    <Header />
    <TaskCards />
  </div>
);

const SImg = css`
  background-image: url(src/img/southern-country.jpeg);
  background-repeat: no-repeat;
  height: 100vh;
`;
