import styles from './header.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type headerProp = {
  page?: 'main' | 'inner';
};

export const Header = ({ page = 'main' }: headerProp) => {
  return (
    <header
      className={classNames(styles.header, globalS.wrapper, {
        [globalS.wrapperInnerPage]: page === 'inner',
      })}
    >
      <Link to={'/'} className={styles.header__logo}>
        <img src="/image/logo.png" alt="Pletner Design" />
      </Link>
    </header>
  );
};
