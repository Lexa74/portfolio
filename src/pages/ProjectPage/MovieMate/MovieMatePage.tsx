import styles from '../page.module.css';
import moviemateStyles from './moviematePage.module.css';
import classNames from 'classnames';

export const MovieMatePage = () => {
  return (
    <>
      <h1>MovieMate</h1>
      <h2 className={styles.subTitle}>
        Мобильное приложение для быстрого поиска фильмов на основе
        предпочтений пользователя
      </h2>
      <div className={styles.divider}></div>

      <div className={classNames(styles.twoColumns, styles.block)}>
        <div className={styles.column}>
          <h3>Проблема:</h3>
          <span>
            Выбор фильма для просмотра — сложный и утомительный процесс.
            Пользователи часто тратят много времени, просматривая списки
            фильмов, читая отзывы и сравнивая рейтинги, но так и не могут
            принять решение. Существующие платформы предлагают слишком
            большой выбор без учета личных предпочтений, что делает поиск еще
            сложнее.
          </span>
        </div>
        <div className={styles.column}>
          <h3>Цель:</h3>
          <span>
            Разработать удобное мобильное приложение, которое упростит
            процесс выбора фильма, предлагая персонализированные рекомендации
            на основе предпочтений пользователя и истории взаимодействий.
            Улучшить пользовательский опыт с помощью интуитивного интерфейса
            и гибких фильтров поиска.
          </span>
        </div>
      </div>

      <div className={styles.block}>
        <h3 className={styles.mb12}>Гипотезы:</h3>
        <ul>
          <li>Люди часто тратят более 10 минут на поиск фильма для просмотра</li>
          <li>
            Рекомендации популярных онлайн-кинотеатров недостаточно
            персонализированные и они не помогают в поиске подходящего фильма
          </li>
          <li>Большинство людей пользовалось бы нашим приложением</li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={moviemateStyles.statsHeading}>Исследования</h3>
        <div className={moviemateStyles.statsIntro}>
          <p>
            Я выбрала количественный метод исследований с возможность
            развернутого ответа на часть вопросов.
          </p>
          <a
            className={moviemateStyles.statsLink}
            target={'_blank'}
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8CnfxeSEeOKVHYqTS5RCOcM4LoO3GIVFgpbqs_JuFxrWj0g/viewform?usp=dialog"
          >
            Ссылка на опрос
          </a>
        </div>
        <div className={moviemateStyles.statsGrid}>
          <div className={moviemateStyles.statCard}>
            <p className={moviemateStyles.statNumber}>88.2%</p>
            <p className={moviemateStyles.statCaption}>
              респондентов выбирают КиноПоиск, так как он входит в подписку
              Яндекс.Плюс
            </p>
          </div>
          <div className={moviemateStyles.statCard}>
            <p className={moviemateStyles.statNumber}>64.7%</p>
            <p className={moviemateStyles.statCaption}>
              не удовлетворены рекомендациями или не замечают их
            </p>
          </div>
          <div className={moviemateStyles.statCard}>
            <p className={moviemateStyles.statNumber}>76.5%</p>
            <p className={moviemateStyles.statCaption}>
              пользователей затрудняются с выбором фильмов и тратят на поиск
              более 10 минут
            </p>
          </div>
          <div className={moviemateStyles.statCard}>
            <p className={moviemateStyles.statNumber}>82.3%</p>
            <p className={moviemateStyles.statCaption}>
              опрошенных проявляют интерес к приложению с персонализированными
              рекомендациями
            </p>
          </div>
          <div
            className={classNames(
              moviemateStyles.statCard,
              moviemateStyles['statCard--wide'],
            )}
          >
            <p className={moviemateStyles.statCaption}>
              Основные раздражающие факторы: недостаток фильмов, особенно
              зарубежных и продвижение российского кино, а также автозапуск
              трейлеров, всплывающие окна.
            </p>
            <p className={moviemateStyles.statCaption}>
              Высокая доля пиратского потребления. Это говорит о
              неудовлетворенности существующими платформами и неготовности
              платить за дополнительные подписки.
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          styles.block,
          styles.mb40,
          moviemateStyles.screenSection,
        )}
      >
        <h3 className={moviemateStyles.screenHeading}>User Flow</h3>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/moviemate/user-flow.png"
          alt="Схема пользовательского флоу MovieMate"
        />
      </div>

      <h2 className={classNames(styles.h1, moviemateStyles.prototypeHeading)}>
        UI/UX-дизайн и{' '}
        <a
          className={moviemateStyles.prototypeLink}
          target={'_blank'}
          href="https://www.figma.com/proto/Kpu0u6GdyibBznsVQrS7xB/MovieMate-%7C-mobile-app?page-id=0%3A1&node-id=3-70&p=f&viewport=466%2C298%2C0.1&t=4jRRkMkvX55iAyGy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A70&show-proto-sidebar=1"
        >
          кликабельный прототип
        </a>
      </h2>

      <div className={styles.block}>
        <h3 className={moviemateStyles.screenHeading}>
          Приветственный экран, вход и регистрация
        </h3>
        <img
          loading="lazy"
          src="/image/project/moviemate/welcome.png"
          alt="Приветственный экран, вход и регистрация MovieMate"
        />
      </div>

      <div className={classNames(styles.block, moviemateStyles.screenSection)}>
        <h3 className={moviemateStyles.screenHeading}>Онбординг</h3>
        <img
          loading="lazy"
          src="/image/project/moviemate/onboarding.png"
          alt="Онбординг MovieMate"
        />
      </div>

      <div className={classNames(styles.block, moviemateStyles.screenSection)}>
        <h3 className={moviemateStyles.screenHeading}>Основные экраны</h3>
        <img
          loading="lazy"
          src="/image/project/moviemate/main-screens.png"
          alt="Основные экраны MovieMate"
        />
      </div>
    </>
  );
};
