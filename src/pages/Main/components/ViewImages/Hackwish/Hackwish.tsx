import styles from './hackwish.module.css';
import { BackgroundHackwish } from './BackgroundHackwish.tsx';

export const Hackwish = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.phones}
        src="/image/portfolio/Hackwish/hackwish-phone.png"
        alt=""
      />
      <BackgroundHackwish />
    </div>
  );
};
