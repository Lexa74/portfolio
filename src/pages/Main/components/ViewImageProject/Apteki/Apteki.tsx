import styles from './apteki.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const Apteki = ({ isHover }: IViewImagesProp) => {
  return (
    <div
      className={classNames(styles.aptekiImage, {
        [styles.isHover]: isHover,
      })}
    >
      <img
        className={classNames(styles.screen, {
          [styles.isHover]: isHover,
        })}
        src="/image/portfolio/Apteki/screen.png"
        alt=""
      />
    </div>
  );
};
