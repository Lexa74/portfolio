import { Header } from '../Main/components/Header/Header.tsx';
import { useParams } from 'react-router-dom';
import { data } from '../../data.ts';
import styles from './layoutProject.module.css';

export const LayoutProject = () => {
  const { pageId } = useParams();

  const project = data.find((el) => el.pageId === pageId);

  return (
    <>
      <Header page={'inner'} />
      <div className={styles.content}>
        {project && <project.pageComponent />}
      </div>
    </>
  );
};
