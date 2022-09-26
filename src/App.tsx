import { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'Home';
import { DragDropHome } from 'Apps/DragDropPractice/DragDropHome';
import { TrelloHome } from 'Apps/TrelloApp/TrelloHome';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drag_drop_practice" element={<DragDropHome />} />
      <Route path="/trello_home" element={<TrelloHome />} />
    </Routes>
  </BrowserRouter>
);
export default App;
