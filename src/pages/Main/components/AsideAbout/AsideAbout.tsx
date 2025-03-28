import styles from './asideAbout.module.css';
import { Button } from '../../../../UI/Button/Button.tsx';
import classNames from 'classnames';
import globalS from '/src/UI/sharedStyles.module.css';

export const AsideAbout = () => {
  return (
    <aside className={classNames(styles.about, globalS.paddingTop)}>
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
            <p>
              Создаю удобные и интуитивные интерфейсы. Люблю сложные задачи,
              продуманные решения и командную работу.
            </p>
            <p>
              Ищу открытую и вдохновляющую команду, где смогу развиваться сама
              и вносить вклад в общую цель.
            </p>
          </div>
        </div>
      </div>
      <a
        target={'_blank'}
        href="https://drive.google.com/file/d/1QXX8H5yBIHoZ8iwHe4AyvIyVpcS14Yyb/view"
      >
        <Button className={styles.about__btn}>Посмотреть CV</Button>
      </a>
    </aside>
  );
};
