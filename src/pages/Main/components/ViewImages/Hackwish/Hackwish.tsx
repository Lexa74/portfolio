import styles from './hackwish.module.css';
import { BackgroundHackwish } from './BackgroundHackwish.tsx';
import { IViewImagesProp } from '../types.ts';

export const Hackwish = ({ isHover }: IViewImagesProp) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.phones}
        src="/image/portfolio/Hackwish/hackwish-phone.png"
        alt=""
      />
      <BackgroundHackwish isHover={isHover} />
    </div>
  );
};
