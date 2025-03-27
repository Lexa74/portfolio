import styles from '../page.module.css';
import classNames from 'classnames';

export const AptekiPage = () => {
  return (
    <>
      <h1>Аптеки</h1>
      <h2 className={styles.subTitle}>
        CJM, глубинки и количественники + концепт приложения
      </h2>
      <div className={styles.divider}></div>
      <div className={classNames(styles.twoColumns, styles.block)}>
        <div className={styles.column}>
          <h3>Проблема:</h3>
          <span>
            Многие пользователи сталкиваются с&nbsp;проблемой поиска нужных
            товаров в&nbsp;аптеках. Они тратят время на&nbsp;сравнение цен,
            наличие препаратов в&nbsp;разных точках и&nbsp;удобство покупки.
            Сайты аптек сложны в&nbsp;навигации, а&nbsp;агрегаторы
            не&nbsp;всегда дают точную информацию. Это создает стресс
            и&nbsp;неудобства, особенно для людей, которым важно быстро найти
            лекарство.
          </span>
        </div>
        <div className={styles.column}>
          <h3>Цель:</h3>
          <span>
            Цель этого кейса&nbsp;— показать процесс создания идеи продукта
            на&nbsp;основе исследований. Я&nbsp;проанализировала потребности
            пользователей, изучила конкурентов и&nbsp;разработала концепцию,
            которая решает выявленные проблемы. Этот кейс демонстрирует мой
            подход к&nbsp;продуктовому дизайну: от&nbsp;исследования
            до&nbsp;формирования идеи.
          </span>
        </div>
      </div>
      <div className={classNames(styles.twoColumns)}>
        <div className={classNames(styles.blueBlock, styles.column)}>
          <div className={styles.flex}>
            <img
              className={styles.imagePersona}
              src="/image/project/photo.png"
              alt=""
            />
            <div>
              <h2 className={styles.blueBlockTitle}>Персона</h2>
              <h3 className={styles.blueBlockSubtitle}>
                Аня, 25 лет, работает удаленно и живет в новом районе города.
              </h3>
            </div>
          </div>
          <div>
            <p className={styles.blueBlockWhiteText}>История:</p>
            <p>
              Аня начала чувствовать себя плохо: ей стало трудно работать и даже
              вставать с кровати.
            </p>
            <p>
              на сдала анализы, назначенные терапевтом, но результаты оказались
              в норме. Тогда врач посоветовал ей обратиться к психиатру.
            </p>
            <p className={styles.mb12}>
              После консультации психиатр выписал Ане антидепрессанты и другие
              необходимые лекарства, которые отпускаются в аптеках только
              по рецепту.
            </p>
            <p className={styles.blueBlockWhiteText}>Основная цель Ани:</p>
            <p>
              Найти аптеку, где можно приобрести назначенные препараты
              по доступной цене, чтобы начать лечение и улучшить свое
              самочувствие.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={classNames(styles.blueBlock, styles.block)}>
            <h3 className={styles.blueBlockTitle}>Сегменты пользователей</h3>
            <ul>
              <li>
                Активная молодежь 18-35 лет, покупающая не только лекарства,
                но и витамины
              </li>
              <li>Мамы, покупающие лекарства для детей</li>
              <li>Люди старше 35 лет</li>
              <li>Пожилые люди</li>
            </ul>
          </div>
          <div className={styles.blueBlock}>
            <h3 className={styles.blueBlockTitle}>Сценарий</h3>
            <ol>
              <li>Осознание проблемы</li>
              <li>Постановка диагноза</li>
              <li>Поиск аптеки</li>
              <li>Путь до аптеки</li>
              <li>Покупка препаратов</li>
              <li>Путь домой</li>
              <li>Начало лечения</li>
            </ol>
          </div>
        </div>
      </div>
      <img className={styles.mb20} src="/image/project/table1.png" alt="" />
      <img className={styles.mb20} src="/image/project/table2.png" alt="" />
      <div className={classNames(styles.blueBlock)}>
        <h3 className={styles.blueBlockTitle}>Гипотезы</h3>
        <p>
          Люди более охотно покупают витамины в аптеках, так как больше им
          доверяют
        </p>
        <p>
          Не каждый покупатель готов заменить лекарство на более дешевый аналог
        </p>
        <p>Люди менее охотно покупают аналоги или уходят в другую аптеку</p>
        <p>
          Большинство людей пользовались бы приложением для онлайн-заказов в
          аптеке
        </p>
      </div>
      <div className={styles.blueBlock}>
        <h4 className={styles.blueBlockTitle}>Аптека «Искамед», г. Минск</h4>
        <div className={classNames(styles.twoColumns, styles.gap0)}>
          <img src="/image/project/ap1.png" alt="" />
          <img src="/image/project/ap2.png" alt="" />
        </div>
      </div>
      <div className={styles.blueBlock}>
        <h4 className={styles.blueBlockTitle}>
          Интервью с фармацевтом аптека «Искамед», г. Минск
        </h4>
        <ul className={styles.customUl}>
          <li className={styles.u}>
            Какой основной сегмент посетителей вы могли бы выделить
          </li>
          <li>Люди 35+</li>
        </ul>
        <ul className={styles.customUl}>
          <li className={styles.u}>
            Каждый покупатель готов заменить препарат на более дешевый аналог?
          </li>
          <li>Нет не каждый, но в большей степени</li>
        </ul>
        <ul className={styles.customUl}>
          <li className={styles.u}>
            Люди менее охотно покупают аналоги, если нет нужного лекарства, или
            совсем уходят?
          </li>
          <li>Пятьдесят на пятьдесят</li>
        </ul>
        <ul className={styles.customUl}>
          <li className={styles.u}>
            Как вы думаете, люди более охотно покупают витамины в аптеках, так
            как больше им доверяют?
          </li>
          <li>Думаю, да</li>
        </ul>
        <ul className={styles.customUl}>
          <li className={styles.u}>
            Если бы вы получали часть заказов онлайн, стала ваша работа
            комфортнее от этого?
          </li>
          <li>Конечно, да</li>
        </ul>
      </div>
    </>
  );
};
