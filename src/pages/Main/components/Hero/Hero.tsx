import styles from './hero.module.css';
import { Button } from '../../../../UI/Button/Button.tsx';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__photo}>
        <img src="/image/photo.png" alt="Анастасия Плетнер" />
      </div>
      <div className={styles.hero__content}>
        <img
          className={styles.hero__title}
          src="/image/title.png"
          alt="Привет, я Настя. UI/UX дизайнер с опытом 2 года"
        />
        <p className={styles.hero__subtitle}>
          UI/UX дизайнер с опытом 2,5 года
        </p>
        <div className={styles.hero__links}>
          <a
            target="_blank"
            className={styles.hero__link}
            href="https://t.me/fraupletner"
          >
            Telegram
          </a>
          <a
            target="_blank"
            className={styles.hero__link}
            href="https://www.linkedin.com/in/anastasia-pletner-206019331/"
          >
            linkedIn
          </a>
          <a
            target="_blank"
            className={styles.hero__link}
            href="mailto:pletneranastasia@gmail.com"
          >
            pletneranastasia@gmail.com
          </a>
        </div>
        <div className={styles.hero__description}>
          <p>
            Создаю удобные и интуитивные интерфейсы. Люблю сложные задачи,
            продуманные решения и командную работу.
          </p>
          <p>
            Ищу открытую и вдохновляющую команду, где смогу развиваться сама
            и вносить вклад в общую цель.
          </p>
        </div>
        <div className={styles.hero__actions}>
          <a
            target={'_blank'}
            href="https://drive.google.com/file/d/1vL_AgiVcspeFZyPGRXV8tTwfnq3TSQBd/view?usp=sharing"
          >
            <Button typeStyle="secondary">Посмотреть CV</Button>
          </a>
          <a target={'_blank'} href="https://t.me/fraupletner">
            <Button>Пригласить на собеседование</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
