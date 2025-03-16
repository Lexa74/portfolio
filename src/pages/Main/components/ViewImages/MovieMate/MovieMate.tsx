import styles from './movieMate.module.css';

export const MovieMate = () => {
  return (
    <div className={styles.movieMateImages} id={'movie-mate-images'}>
      <img
        id={'movie-item'}
        className={styles.movieItem}
        src="/image/portfolio/MovieMate/screen.png"
        alt=""
      />
    </div>
  );
};
