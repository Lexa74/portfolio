import styles from './fenukoFlow.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const FenukoFlow = ({ isHover }: IViewImagesProp) => {
  const floaty = (name: string) =>
    classNames(styles.floating, styles[name], { [styles.isHover]: isHover });

  return (
    <div className={styles.wrapper}>
      <img className={styles.bg} src="/image/portfolio/FenukoFlow/card/bg.png" alt="" />

      <div className={floaty('sparkleTop')}>
        <img src="/image/portfolio/FenukoFlow/card/sparkle.png" alt="" />
      </div>
      <div className={floaty('sparkleBottom')}>
        <img src="/image/portfolio/FenukoFlow/card/sparkle.png" alt="" />
      </div>

      <div className={floaty('bubbleTop')}>
        <img src="/image/portfolio/FenukoFlow/card/bubble-top.png" alt="" />
      </div>

      <div className={floaty('bubbleBottom')}>
        <img src="/image/portfolio/FenukoFlow/card/bubble-bottom.png" alt="" />
      </div>

      <div className={floaty('bubbleCenter')}>
        <img src="/image/portfolio/FenukoFlow/card/bubble-center.png" alt="" />
      </div>
    </div>
  );
};
