import { Header } from '../../components/Header/Header.tsx';
import { useParams } from 'react-router-dom';
import { data } from '../../data.ts';
import styles from './layoutProject.module.css';
import { Footer } from '../../components/Footer/Footer.tsx';

export const LayoutProject = () => {
  const { pageId } = useParams();

  const project = data.find((el) => el.pageId === pageId);

  return (
    <>
      <Header page={'inner'} />
      <div className={styles.content}>
        {project && <project.pageComponent />}
      </div>
      <Footer />
    </>
  );
};
