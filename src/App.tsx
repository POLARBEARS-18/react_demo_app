import { FC, useState } from 'react';
import { css } from '@emotion/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'Home';
import { DragDropHome } from 'Apps/DragDropPractice/DragDropHome';
import { TrelloHome } from 'Apps/TrelloApp/TrelloHome';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag_drop_practice" element={<DragDropHome />} />
        <Route path="/trello_home" element={<TrelloHome />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

const SCard = () => css`
  background-color: #242424;
`;
