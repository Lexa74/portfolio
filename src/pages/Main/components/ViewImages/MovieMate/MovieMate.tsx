import styles from './movieMate.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const MovieMate = ({ isHover }: IViewImagesProp) => {
  return (
    <div
      className={classNames(styles.movieMateImages, {
        [styles.isHover]: isHover,
      })}
    >
      <img
        className={classNames(styles.movieItem, {
          [styles.isHover]: isHover,
        })}
        src="/image/portfolio/MovieMate/screen.png"
        alt=""
      />
    </div>
  );
};
