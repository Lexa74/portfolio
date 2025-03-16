import styles from './mainContent.module.css';
import { data } from '../../../../data.ts';
import { MovieMate } from '../ViewImages/MovieMate/MovieMate.tsx';
import classNames from 'classnames';

export const MainContent = () => {
  return (
    <div>
      <div className={styles.mainContent}>
        {data.map((card) => (
          <a
            key={card.id}
            href="#"
            className={styles.card}
            id={card.idSelector && card.idSelector}
          >
            {card.component ? (
              <div className={styles.card__image}>
                <MovieMate />
              </div>
            ) : (
              <img
                className={styles.card__image}
                src={card.src}
                alt={card.name}
              />
            )}

            <h3 className={styles.card__title}>{card.name}</h3>
            <p className={styles.card__description}>{card.description}</p>
          </a>
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
