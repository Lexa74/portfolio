import styles from './asideAbout.module.css';
import { Button } from '../../../../UI/Button/Button.tsx';

export const AsideAbout = () => {
  return (
    <aside className={styles.about}>
      <div className={styles.about__wrapper}>
        <div className={styles.wrapperAvatar}>
          <img className={styles.avatar} src="/image/avatar.png" alt={''} />
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__title}>
            Привет! Меня зовут Настя, я UI/UX дизайнер с опытом более 1 года
          </div>
          <div className={styles.about__links}>
            <a className={styles.about__link} href="#">
              Telegram
            </a>
            <a className={styles.about__link} href="#">
              linkedIn
            </a>
            <a className={styles.about__link} href="#">
              Behance
            </a>
            <a className={styles.about__link} href="#">
              pletneranastasia@gmail.com
            </a>
          </div>
          <div className={styles.about__description}>
            Здесь можно будет написать текст, который отражал бы меня как
            специалиста, что-то профессионально-вайбовое, что нравится, что ищу,
            и вообще, что я крутая!!!!!
          </div>
        </div>
      </div>
      <Button className={styles.about__btn}>Скачать CV</Button>
    </aside>
  );
};
