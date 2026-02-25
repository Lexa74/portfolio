import { Header } from '../../components/Header/Header.tsx';
import { useParams } from 'react-router-dom';
import { data } from '../../data.ts';
import styles from './layoutProject.module.css';
import { Footer } from '../../components/Footer/Footer.tsx';
import globalS from '/src/UI/sharedStyles.module.css';
import classNames from 'classnames';
import './page.css';

export const LayoutProject = () => {
  const { pageId } = useParams();

  const project = data.find((el) => el.pageId === pageId);

  return (
    <>
      <Header page={'inner'} />
      <div
        className={classNames(
          styles.content,
          globalS.wrapperInnerPage,
          globalS.paddingTop,
          'projectPage',
        )}
      >
        {project && project.pageComponent && <project.pageComponent />}
      </div>
      <Footer />
    </>
  );
};
