import { Header } from '../../components/Header/Header.tsx';
import { useParams } from 'react-router-dom';
import { data } from '../../data.ts';
import styles from './layoutProject.module.css';
import { Footer } from '../../components/Footer/Footer.tsx';
import globalS from '/src/UI/sharedStyles.module.css';
import classNames from 'classnames';

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
        )}
      >
        {project && <project.pageComponent />}
      </div>
      <Footer />
    </>
  );
};
