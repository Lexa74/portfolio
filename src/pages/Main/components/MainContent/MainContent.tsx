import styles from './mainContent.module.css';
import { data } from '../../../../data.ts';
import { MovieMate } from '../ViewImages/MovieMate/MovieMate.tsx';

export const MainContent = () => {
  return (
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
  );
};
