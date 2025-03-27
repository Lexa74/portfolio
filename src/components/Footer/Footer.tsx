import styles from './footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to={'/'} className={styles.goHome}>
        <img className={styles.footer__arr} src="/image/arr-back.svg" alt="" />
        <span>Вернуться на главную</span>
      </Link>
      <div className={styles.footer__linkBox}>
        <a
          target="_blank"
          className={styles.footer__link}
          href="https://t.me/fraupletner"
        >
          Telegram
        </a>
        <a
          target="_blank"
          className={styles.footer__link}
          href="https://www.linkedin.com/in/anastasia-pletner-206019331/"
        >
          linkedIn
        </a>
        <a
          target="_blank"
          className={styles.footer__link}
          href="https://www.behance.net/pletnerdesign"
        >
          Behance
        </a>
        <a
          target="_blank"
          className={styles.footer__link}
          href="mailto:pletneranastasia@gmail.com"
        >
          pletneranastasia@gmail.com
        </a>
      </div>
    </div>
  );
};
