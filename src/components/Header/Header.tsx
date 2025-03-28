import styles from './header.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button.tsx';
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
      <Link to={'/'} className={styles.header__name}>
        Anastasia Pletner
      </Link>
      <a
        className={styles.mobileBtn}
        target="_blank"
        href="https://t.me/fraupletner"
      >
        <Button>Связаться</Button>
      </a>
      <a
        className={styles.desktopBtn}
        target="_blank"
        href="https://t.me/fraupletner"
      >
        <Button>Пригласить на собеседование</Button>
      </a>
    </header>
  );
};
