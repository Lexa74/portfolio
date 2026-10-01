import styles from './coffeeBreak.module.css';
import { IViewImagesProp } from '../types.ts';
import classNames from 'classnames';

export const CoffeeBreak = ({ isHover }: IViewImagesProp) => {
  const floaty = (name: string) =>
    classNames(styles.floating, styles[name], { [styles.isHover]: isHover });

  return (
    <div className={styles.wrapper}>
      <img className={styles.bg} src="/image/portfolio/CoffeeBreak/card/bg.png" alt="" />

      <img className={floaty('cup')} src="/image/portfolio/CoffeeBreak/card/cup.png" alt="" />
      <img
        className={floaty('flagChina')}
        src="/image/portfolio/CoffeeBreak/card/flag-china.png"
        alt=""
      />
      <img
        className={floaty('flagPortugal')}
        src="/image/portfolio/CoffeeBreak/card/flag-portugal.png"
        alt=""
      />
      <img
        className={floaty('flagItaly')}
        src="/image/portfolio/CoffeeBreak/card/flag-italy.png"
        alt=""
      />
      <img
        className={floaty('flagGermany')}
        src="/image/portfolio/CoffeeBreak/card/flag-germany.png"
        alt=""
      />
      <img
        className={floaty('airpods')}
        src="/image/portfolio/CoffeeBreak/card/airpods.png"
        alt=""
      />

      <img className={styles.phone} src="/image/portfolio/CoffeeBreak/card/phone.png" alt="" />
    </div>
  );
};
