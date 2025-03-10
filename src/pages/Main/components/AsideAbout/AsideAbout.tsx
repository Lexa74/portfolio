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
          <h1 className={styles.about__title}>
            Привет! Меня зовут Настя, я UI/UX дизайнер с опытом более 1 года
          </h1>
          <div className={styles.about__links}>
            <a
              target="_blank"
              className={styles.about__link}
              href="https://t.me/fraupletner"
            >
              Telegram
            </a>
            <a
              target="_blank"
              className={styles.about__link}
              href="https://www.linkedin.com/in/anastasia-pletner-206019331/"
            >
              linkedIn
            </a>
            <a
              target="_blank"
              className={styles.about__link}
              href="https://www.behance.net/pletnerdesign"
            >
              Behance
            </a>
            <a
              target="_blank"
              className={styles.about__link}
              href="mailto:pletneranastasia@gmail.com"
            >
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
