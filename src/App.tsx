import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main.tsx';
import { LayoutProject } from './pages/ProjectPage/LayoutProject.tsx';
import { PrivacyPage } from './pages/Privacy/PrivacyPage.tsx';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.tsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/project/:pageId'} element={<LayoutProject />} />
        <Route path={'/privacy'} element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
