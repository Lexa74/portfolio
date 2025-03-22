import styles from './dashboard.module.css';
import classNames from 'classnames';
import { IViewImagesProp } from '../types.ts';

export const Dashboard = ({ isHover }: IViewImagesProp) => {
  return (
    <div className={styles.wrapperImages}>
      <div className={styles.imagesContainer}>
        <img
          className={classNames(styles.image, styles.image1, {
            [styles.isHover]: isHover,
          })}
          src="/image/portfolio/Dashboard/dark.png"
          alt=""
        />
        <img
          className={classNames(styles.image, styles.image2, {
            [styles.isHover]: isHover,
          })}
          src="/image/portfolio/Dashboard/light.png"
          alt=""
        />
      </div>
    </div>
  );
};
