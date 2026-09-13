import styles from './header.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type headerProp = {
  page?: 'main' | 'inner';
};

export const Header = ({ page = 'main' }: headerProp) => {
  const isInner = page === 'inner';

  return (
    <header
      className={classNames(styles.header, globalS.wrapper, {
        [globalS.wrapperInnerPage]: isInner,
        [styles.header_inner]: isInner,
      })}
    >
      {isInner && (
        <Link to={'/'} className={styles.header__back}>
          <img src="/image/arr-back.svg" alt="" />
          <span>Назад</span>
        </Link>
      )}
      <Link to={'/'} className={styles.header__logo}>
        <img src="/image/logo.png" alt="Pletner Design" />
      </Link>
      {isInner && (
        <a
          className={styles.header__contact}
          target="_blank"
          href="https://t.me/fraupletner"
        >
          Связаться
        </a>
      )}
    </header>
  );
};
