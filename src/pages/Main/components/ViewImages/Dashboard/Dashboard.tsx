import styles from './dashboard.module.css';
import classNames from 'classnames';

export const Dashboard = () => {
  return (
    <div className={styles.wrapperImages}>
      <div className={styles.imagesContainer}>
        <img
          className={classNames(styles.image, styles.image1)}
          id={'dashboard-image1'}
          src="/image/portfolio/Dashboard/dark.png"
          alt=""
        />
        <img
          className={classNames(styles.image, styles.image2)}
          id={'dashboard-image2'}
          src="/image/portfolio/Dashboard/light.png"
          alt=""
        />
      </div>
    </div>
  );
};
