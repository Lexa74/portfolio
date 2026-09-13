import styles from './mainContent.module.css';
import { data } from '../../../../data.ts';
import classNames from 'classnames';
import { Project } from '../Project/Project.tsx';

export const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      {data.map((card) => (
        <Project key={card.id} card={card} />
      ))}
      <a href="#" className={classNames(styles.card, styles.wide)}>
        <div className={styles.card__image}>
          <img src={'/image/portfolio/diffImage.png'} alt={''} />
        </div>
        <h3 className={styles.card__title}>Другое</h3>
        <p className={styles.card__description}>
          Здесь представлены некоторые выполненные мной тестовые и другие просто
          прикольные штуки
        </p>
      </a>
    </div>
  );
};
