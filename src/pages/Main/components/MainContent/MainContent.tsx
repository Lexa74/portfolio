import styles from './mainContent.module.css';
import { data } from '../../../../data.ts';
import classNames from 'classnames';
import { Project } from '../Project/Project.tsx';
import globalS from '/src/UI/sharedStyles.module.css';

export const MainContent = () => {
  return (
    <div>
      <div className={classNames(styles.mainContent, globalS.paddingTop)}>
        {data.map((card) => (
          <Project key={card.id} card={card} />
        ))}
      </div>
      <a href="#" className={classNames(styles.card, styles.diff)}>
        <img
          className={styles.card__image}
          src={'/image/portfolio/diffImage.png'}
          alt={''}
        />
        <h3 className={styles.card__title}>Другое</h3>
        <p className={styles.card__description}>
          Здесь представлены некоторые выполненные мной тестовые и другие просто
          прикольные штуки
        </p>
      </a>
    </div>
  );
};
