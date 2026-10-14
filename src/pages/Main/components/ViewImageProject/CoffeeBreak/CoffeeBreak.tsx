import styles from './coffeeBreak.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const CoffeeBreak = ({ isHover }: IViewImagesProp) => {
  const floaty = (name: string) =>
    classNames(styles.floating, styles[name], { [styles.isHover]: isHover });

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.bg}
        src="/image/portfolio/CoffeeBreak/card/bg.webp"
        alt=""
        decoding="async"
      />

      <img
        className={floaty('cup')}
        src="/image/portfolio/CoffeeBreak/card/cup.webp"
        alt=""
        decoding="async"
      />
      <img
        className={floaty('flagChina')}
        src="/image/portfolio/CoffeeBreak/card/flag-china.webp"
        alt=""
        decoding="async"
      />
      <img
        className={floaty('flagPortugal')}
        src="/image/portfolio/CoffeeBreak/card/flag-portugal.webp"
        alt=""
        decoding="async"
      />
      <img
        className={floaty('flagItaly')}
        src="/image/portfolio/CoffeeBreak/card/flag-italy.webp"
        alt=""
        decoding="async"
      />
      <img
        className={floaty('flagGermany')}
        src="/image/portfolio/CoffeeBreak/card/flag-germany.webp"
        alt=""
        decoding="async"
      />
      <img
        className={floaty('airpods')}
        src="/image/portfolio/CoffeeBreak/card/airpods.webp"
        alt=""
        decoding="async"
      />

      <img
        className={styles.phone}
        src="/image/portfolio/CoffeeBreak/card/phone.webp"
        alt=""
        decoding="async"
      />
    </div>
  );
};
