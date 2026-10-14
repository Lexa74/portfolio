import styles from './fenukoFlow.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const FenukoFlow = ({ isHover }: IViewImagesProp) => {
  const floaty = (name: string) =>
    classNames(styles.floating, styles[name], { [styles.isHover]: isHover });

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.bg}
        src="/image/portfolio/FenukoFlow/card/bg.webp"
        alt=""
        decoding="async"
      />

      <div className={floaty('sparkleTop')}>
        <img
          src="/image/portfolio/FenukoFlow/card/sparkle.webp"
          alt=""
          decoding="async"
        />
      </div>
      <div className={floaty('sparkleBottom')}>
        <img
          src="/image/portfolio/FenukoFlow/card/sparkle.webp"
          alt=""
          decoding="async"
        />
      </div>

      <div className={floaty('bubbleTop')}>
        <img
          src="/image/portfolio/FenukoFlow/card/bubble-top.webp"
          alt=""
          decoding="async"
        />
      </div>

      <div className={floaty('bubbleBottom')}>
        <img
          src="/image/portfolio/FenukoFlow/card/bubble-bottom.webp"
          alt=""
          decoding="async"
        />
      </div>

      <div className={floaty('bubbleCenter')}>
        <img
          src="/image/portfolio/FenukoFlow/card/bubble-center.webp"
          alt=""
          decoding="async"
        />
      </div>
    </div>
  );
};
