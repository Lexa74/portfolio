import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../../UI/Button/Button.tsx';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.header__name}>
        Anastasia Pletner
      </Link>
      <a href="#">
        <Button>Пригласить на собеседование</Button>
      </a>
    </header>
  );
};
