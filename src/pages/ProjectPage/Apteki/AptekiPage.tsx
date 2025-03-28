import styles from '../page.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
              <p className={styles.blueBlockSubtitle}>
                Аня, 25 лет, работает удаленно и живет в новом районе города.
              </p>
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
      <img
        className={styles.mb20}
        src="/image/project/table1.png"
        alt=""
        loading="lazy"
      />
      <img
        className={styles.mb20}
        src="/image/project/table2.png"
        alt=""
        loading="lazy"
      />
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
          <img src="/image/project/ap1.png" alt="" loading="lazy" />
          <img src="/image/project/ap2.png" alt="" loading="lazy" />
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
      <div className={styles.blueBlock}>
        <h4 className={styles.blueBlockTitle}>
          Список вопросов для респондентов:
        </h4>
        <p className={styles.blueBlockWhiteText}>
          Гипотеза 1: Витамины в аптеках
        </p>
        <ol className={styles.mb12}>
          <li>Где вы обычно покупаете витамины?</li>
          <li>Почему вы выбираете аптеки/интернет-магазины?</li>
          <li>
            Доверяете ли вы качеству витаминов из аптеки больше, чем из
            интернета?
          </li>
          <li>
            Были ли случаи, когда вы покупали витамины в
            аптеке/интернет-магазине?
          </li>
          <li>
            Что для вас важнее при покупке витаминов: цена, качество или
            удобство?
          </li>
        </ol>
        <p className={styles.blueBlockWhiteText}>
          Гипотеза 2: Замена на дешевый аналог
        </p>
        <ol className={styles.mb12}>
          <li>Готовы ли вы заменить дорогое лекарство на аналог?</li>
          <li>Что важнее: цена или оригинальность препарата?</li>
          <li>Были ли случаи, когда вы отказались от аналога?</li>
          <li>Как вы относитесь к дженерикам?</li>
          <li>Что может повлиять на ваше решение купить аналог?</li>
        </ol>
        <p className={styles.blueBlockWhiteText}>
          Гипотеза 3: Аналоги и смена аптеки
        </p>
        <ol className={styles.mb12}>
          <li>Если в аптеке нет нужного препарата, что вы делаете?</li>
          <li>Как часто вы сталкиваетесь с отсутствием препаратов?</li>
          <li>Что важнее: купить сразу аналог или найти нужный препарат?</li>
          <li>Были ли случаи, когда вы уходили в другую аптеку?</li>
          <li>
            Как вы относитесь к замене препарата по рекомендации фармацевта?
          </li>
        </ol>
        <p className={styles.blueBlockWhiteText}>
          Гипотеза 4: Приложение для заказов
        </p>
        <ol>
          <li>Пользовались ли вы приложениями для заказа лекарств?</li>
          <li>Что важнее: забрать в аптеке или доставка?</li>
          <li>Какие функции приложения были бы полезны?</li>
          <li>Что может помешать использовать приложение?</li>
          <li>Как часто вы заказываете лекарства онлайн?</li>
        </ol>
      </div>
      <img className={styles.block} src="/image/project/Table%201.png" alt="" />
      <img
        className={styles.block}
        src="/image/project/Table-1%201.png"
        alt=""
      />
      <img
        className={styles.block}
        src="/image/project/Table-2%201.png"
        alt=""
      />
      <img
        className={styles.block}
        src="/image/project/Table-3%201.png"
        alt=""
      />
      <img
        className={styles.block}
        src="/image/project/Table-4%201.png"
        alt=""
      />
      <div className={classNames(styles.blueBlock, styles.mb40)}>
        <h4 className={styles.blueBlockWhiteText}>
          Выводы по гипотезам, исходя из результатов интервью
        </h4>
        <div className={styles.mb12}>
          <p className={styles.blueBlockWhiteText}>
            Гипотеза 1: Люди более охотно покупают витамины в аптеках, так как
            больше им доверяют
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Подтверждение: </span>
            Частично.
          </p>
          <p>Вика полностью доверяет аптекам и покупает витамины только там.</p>
          <p>
            Игорь и Дмитрий менее лояльны к аптекам: Игорь выбирает между
            аптеками и интернетом, а Дмитрий покупает витамины исключительно
            онлайн.
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Инсайт: </span> Доверие
            к аптекам зависит от возраста, привычек и предпочтений. Молодежь
            и продвинутые пользователи (как Дмитрий) чаще выбирают
            онлайн-покупки из-за удобства и цены, тогда как более консервативные
            покупатели (как Вика) предпочитают аптеки из-за доверия к качеству.
          </p>
        </div>
        <div className={styles.mb12}>
          <p className={styles.blueBlockWhiteText}>
            Гипотеза 2: Не каждый покупатель готов заменить лекарство на более
            дешевый аналог
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Подтверждение: </span>
            Подтверждается.
          </p>
          <p>
            Вика категорически не готова заменять оригинальные препараты
            на аналоги, строго следуя рекомендациям врача.
          </p>
          <p>
            Игорь готов заменить препарат на аналог, но только если
            он проверенный и имеет хорошие отзывы.
          </p>
          <p>
            Дмитрий также готов к замене, если аналог доказал свою
            эффективность.
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Инсайт: </span>
            Готовность к замене зависит от уровня доверия к дженерикам
            и рекомендациям врачей. Чем выше доверие к врачу, тем меньше
            вероятность замены.
          </p>
        </div>
        <div className={styles.mb12}>
          <p className={styles.blueBlockWhiteText}>
            Гипотеза 3: Люди менее охотно покупают аналоги или уходят в другую
            аптеку
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Подтверждение: </span>
            Подтверждается.
          </p>
          <p>
            Вика предпочитает искать нужный препарат в других аптеках,
            а не покупать аналог.
          </p>
          <p>
            Игорь чаще покупает аналог, если он проверенный, но иногда ищет
            в других аптеках.
          </p>
          <p>
            Дмитрий вообще не ходит в аптеки, поэтому для него этот вопрос
            не актуален.
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Инсайт: </span>
            Покупатели делятся на две группы: те, кто доверяет аналогам (если
            они проверены), и те, кто предпочитает искать оригинальный препарат.
          </p>
        </div>
        <div className={styles.mb20}>
          <p className={styles.blueBlockWhiteText}>
            Гипотеза 4: Большинство людей пользовались бы приложением для
            онлайн-заказов в аптеке
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Подтверждение: </span>
            Подтверждается.
          </p>
          <p>
            Вика не пользовалась приложениями, но готова попробовать, если это
            будет удобно.
          </p>
          <p>Игорь уже пользуется приложениями и считает их полезными.</p>
          <p>
            Дмитрий активно использует онлайн-сервисы для заказа лекарств
            и витаминов.
          </p>
          <p>
            <span className={styles.blueBlockWhiteText}>Инсайт: </span>
            Потенциал для внедрения приложений высок, особенно среди молодежи
            и занятых людей. Однако важно сделать интерфейс простым и удобным,
            чтобы привлечь менее продвинутых пользователей, таких как Вика.
          </p>
        </div>
        <h4 className={styles.blueBlockWhiteText}>Общие выводы</h4>

        <ol>
          <li>
            Доверие к аптекам сильнее у старшего поколения и консервативных
            покупателей, тогда как молодежь и продвинутые пользователи чаще
            выбирают онлайн-покупки.
          </li>
          <li>
            Готовность к замене на аналоги зависит от уровня доверия
            к дженерикам и рекомендациям врачей. Чем выше доверие к врачу, тем
            меньше вероятность замены.
          </li>
          <li>
            Онлайн-сервисы имеют высокий потенциал, особенно среди молодежи
            и занятых людей, но важно учитывать потребности менее продвинутых
            пользователей.
          </li>
        </ol>
      </div>
      <div className={styles.block}>
        <span className={classNames(styles.title24, styles.mb12)}>
          Количественные исследования
        </span>
        <Link
          className={classNames(
            styles.subTitle,
            styles.title24,
            styles.db,
            styles.mb20,
          )}
          target={'_blank'}
          to={
            'https://docs.google.com/forms/d/e/1FAIpQLScqC54cYIQJOhxPTiEnqLBncftl36aFaR1ornKBp9ETZSVX4w/viewform'
          }
        >
          Ссылка на опрос
        </Link>
        <div className={styles.twoColumns}>
          <div className={styles.columnsSpaceBetween}>
            <img src="/image/project/diag1.png" alt="" />
            <img src="/image/project/diag2.png" alt="" />
            <img src="/image/project/diag3.png" alt="" />
            <img src="/image/project/diag4.png" alt="" />
          </div>
          <div className={styles.columnsSpaceBetween}>
            <img src="/image/project/diag2-1.png" alt="" />
            <img src="/image/project/diag2-2.png" alt="" />
            <img src="/image/project/diag2-3.png" alt="" />
            <img src="/image/project/diag2-4.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.twoColumns}>
        <div
          className={classNames(
            styles.blueBlock,
            styles.mb0,
            styles.columnsSpaceBetween,
          )}
        >
          <div>
            <h4 className={styles.blueBlockWhiteText}>
              Выводы по количественным исследованиям
            </h4>

            <p>
              Три из четырех гипотез подтвердились. Оказалось, что люди чаще
              покупают витамины в интернете, чем в аптеках.
            </p>
            <p>
              <span className={styles.blueBlockWhiteText}>
                Основные боли пользователей:{' '}
              </span>
              Длинные очереди и долгое обслуживание
            </p>
            <p>
              <span className={styles.blueBlockWhiteText}>Решение: </span>
              Разработка приложения, с помощью которого можно найти аптеку
              с нужными препаратами, наиболее подходящими для пользователя
              ценами и удобным местоположением. Заказ будет передаваться
              фармацевту в выбранную аптеку и собираться заранее. Получить его
              можно будет по уникальному коду. Для этого предусмотрено отдельное
              окно для онлайн-заказов, где очереди практически не будет
              благодаря сокращению времени обслуживания.
            </p>
          </div>
          <div className={classNames(styles.flexEnd, styles.twoColumns)}>
            <img
              className={styles.radius12}
              src="/image/project/kotik.gif"
              alt=""
            />
            <h5 className={classNames(styles.blueBlockWhiteText, styles.mb0)}>
              Спасибо за прочтение!
            </h5>
          </div>
        </div>
        <div>
          <h4 className={classNames(styles.h1, styles.textCenter)}>
            Концепт главного экрана приложения
          </h4>
          <img src="/image/project/image-phone.png" alt="" />
        </div>
      </div>
    </>
  );
};
