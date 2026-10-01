import styles from './project.module.css';
import { IProject } from '../../../../sharedTypes/sharedTypes.ts';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { NdaModal } from '../../../../components/NdaModal/NdaModal.tsx';

type ProjectProps = { card: IProject };

export const Project = ({ card }: ProjectProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isNdaOpen, setIsNdaOpen] = useState(false);
  const navigate = useNavigate();
  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };

  const content = (
    <>
      <div className={styles.card__image}>
        {card.component ? (
          <card.component isHover={isHover} />
        ) : (
          <img src={card.src} alt={card.name} />
        )}
        {card.comingSoon && (
          <div
            className={classNames(styles.card__overlay, {
              [styles.card__overlayVisible]: isHover,
            })}
          >
            <span>Уже в работе — скоро покажу</span>
          </div>
        )}
      </div>

      <h3 className={styles.card__title}>{card.name}</h3>
      <div className={styles.card__tags}>
        {card.tags.map((tag) => (
          <span key={tag} className={styles.card__tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (card.ndaPassword && card.pageId) {
    return (
      <>
        <div
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={() => setIsNdaOpen(true)}
          className={classNames(styles.card, styles.card__clickable)}
        >
          {content}
        </div>
        {isNdaOpen && (
          <NdaModal
            password={card.ndaPassword}
            onClose={() => setIsNdaOpen(false)}
            onSuccess={() => {
              setIsNdaOpen(false);
              navigate(`/project/${card.pageId}`);
            }}
          />
        )}
      </>
    );
  }

  if (card.comingSoon || !card.pageId) {
    return (
      <div
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className={classNames(styles.card, styles.card__disabled)}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      to={`/project/${card.pageId}`}
      className={styles.card}
    >
      {content}
    </Link>
  );
};
