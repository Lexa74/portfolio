import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import globalS from '/src/UI/sharedStyles.module.css';

type FooterProps = {
  page?: 'main' | 'inner';
};

export const Footer = ({ page = 'main' }: FooterProps) => {
  const isInner = page === 'inner';

  return (
    <div
      className={classNames(styles.footer, {
        [globalS.wrapperInnerPage]: isInner,
        [globalS.wrapper]: !isInner,
      })}
    >
      {isInner ? (
        <Link to={'/'} className={styles.goHome}>
          <img className={styles.footer__arr} src="/image/arr-back.svg" alt="" />
          <span>Вернуться на главную</span>
        </Link>
      ) : (
        <Link to={'/'} className={styles.footer__logo}>
          <img src="/image/logo.png" alt="Pletner Design" />
        </Link>
      )}
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
          href="mailto:pletneranastasia@gmail.com"
        >
          pletneranastasia@gmail.com
        </a>
      </div>
    </div>
  );
};
