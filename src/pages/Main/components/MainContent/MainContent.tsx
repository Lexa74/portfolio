import styles from './mainContent.module.css';
import { data } from '../../../../data.ts';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../Project/Project.tsx';

export const MainContent = () => {
  const [isIconsHover, setIsIconsHover] = useState(false);
  const [isScreensHover, setIsScreensHover] = useState(false);

  return (
    <>
      <img className={styles.title} src="/image/cases-title.png" alt="Кейсы" />
      <div className={styles.mainContent}>
        {data.map((card) => (
          <Project key={card.id} card={card} />
        ))}
      </div>

      <img
        className={classNames(styles.title, styles.titleOther)}
        src="/image/other-title.png"
        alt="Другое"
      />
      <div className={styles.mainContent}>
        <Link to="/collages" className={styles.card}>
          <div className={styles.card__image}>
            <img src={'/image/portfolio/Other/collages.png'} alt={''} />
          </div>
        </Link>
        <a
          href="#"
          className={styles.card}
          onMouseOver={() => setIsIconsHover(true)}
          onMouseOut={() => setIsIconsHover(false)}
        >
          <div className={styles.card__image}>
            <img src={'/image/portfolio/Other/icons.png'} alt={''} />
            <div
              className={classNames(styles.card__overlay, {
                [styles.card__overlayVisible]: isIconsHover,
              })}
            >
              <span>Уже в работе — скоро покажу</span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className={styles.card}
          onMouseOver={() => setIsScreensHover(true)}
          onMouseOut={() => setIsScreensHover(false)}
        >
          <div className={styles.card__image}>
            <img src={'/image/portfolio/Other/screens.png'} alt={''} />
            <div
              className={classNames(styles.card__overlay, {
                [styles.card__overlayVisible]: isScreensHover,
              })}
            >
              <span>Уже в работе — скоро покажу</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
