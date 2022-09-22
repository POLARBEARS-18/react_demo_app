import { css } from '@emotion/react';
import React, { FC } from 'react';
import { Header } from './components/Header';
import { TaskCards } from './components/tasks/TaskCards';

export const TrelloHome: FC = () => (
  <div css={[SImg]}>
    <Header />
    <TaskCards />
  </div>
);

const SImg = css`
  background: url(../img/southern-country.jpeg);
  background-repeat: no-repeat;
  height: 100vh;
`;
