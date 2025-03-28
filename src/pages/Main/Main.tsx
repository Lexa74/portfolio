import { Header } from '../../components/Header/Header.tsx';
import styles from './main.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import { AsideAbout } from './components/AsideAbout/AsideAbout.tsx';
import { MainContent } from './components/MainContent/MainContent.tsx';
import classNames from 'classnames';

export const Main = () => {
  return (
    <>
      <Header />
      <div className={classNames(styles.container, globalS.wrapper)}>
        <AsideAbout />
        <MainContent />
      </div>
    </>
  );
};
