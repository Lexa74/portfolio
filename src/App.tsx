import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main.tsx';
import { LayoutProject } from './pages/ProjectPage/LayoutProject.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/project/:pageId'} element={<LayoutProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
