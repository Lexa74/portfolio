import { Header } from './components/Header/Header.tsx';
import styles from './main.module.css';
import { AsideAbout } from './components/AsideAbout/AsideAbout.tsx';
import { MainContent } from './components/MainContent/MainContent.tsx';

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AsideAbout />
        <MainContent />
      </div>
    </>
  );
};
