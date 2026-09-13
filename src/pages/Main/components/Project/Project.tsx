import styles from './project.module.css';
import { IProject } from '../../../../sharedTypes/sharedTypes.ts';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type ProjectProps = { card: IProject };

export const Project = ({ card }: ProjectProps) => {
  const [isHover, setIsHover] = useState(false);
  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };

  return (
    <Link
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      to={`/project/${card.pageId}`}
      className={styles.card}
    >
      <div className={styles.card__image}>
        {card.component ? (
          <card.component isHover={isHover} />
        ) : (
          <img src={card.src} alt={card.name} />
        )}
      </div>

      <h3 className={styles.card__title}>{card.name}</h3>
      <p className={styles.card__description}>{card.description}</p>
    </Link>
  );
};
