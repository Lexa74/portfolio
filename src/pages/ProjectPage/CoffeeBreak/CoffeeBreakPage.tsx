import styles from '../page.module.css';
import cbStyles from './coffeeBreakPage.module.css';
import classNames from 'classnames';

export const CoffeeBreakPage = () => {
  return (
    <>
      <div className={cbStyles.titleRow}>
        <img
          className={cbStyles.appIcon}
          src="/image/project/coffeebreak/icon.png"
          alt=""
        />
        <h1 className={cbStyles.titleGrow}>
          Coffee Break Languages — Мобильное приложение для изучения языков
          со структурой по уровням CEFR (A1–C2)
        </h1>
        <a
          className={cbStyles.appStoreBadge}
          target={'_blank'}
          href="https://apps.apple.com/us/app/coffee-break-languages/id6762005097"
        >
          <img
            src="/image/project/coffeebreak/app-store-badge.svg"
            alt="Download on the App Store"
          />
        </a>
      </div>
      <div className={styles.divider}></div>
      <div className={cbStyles.metaRow}>
        <span>
          Роль: <b>Product &amp; UI/UX Designer</b>
        </span>
        <span>
          Формат: <b>Solo, end-to-end</b>
        </span>
        <span>
          Платформа: <b>iOS</b>
        </span>
        <span>Апрель 2026</span>
      </div>

      <div className={cbStyles.gap32}>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/coffeebreak/hero.png"
          alt="Главный экран, выбор уровня и прогресс в Coffee Break Languages"
        />
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={styles.mb12}>Проблема</h3>
        <p>
          Новичок теряется в первые же минуты — неясно, с чего начать.
          Упражнения без немедленной обратной связи вызывают страх ошибиться.
          Мотивация падает, если прогресс не виден. А переход на платную
          подписку легко ощущается как навязанный, если сделан слишком резко.
        </p>
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={styles.mb12}>Ресерч</h3>
        <p>
          Сравнила подход трёх главных игроков категории. Duolingo держится на
          геймификации — streaks, лиги, персонажи — и одной плоской подписке
          без привязки к уровням языка. Babbel встроил AI-собеседника для
          разговорной практики, но вынес его в отдельный режим вне уроков.
          Busuu ближе всего по структуре — учит по официальным CEFR-уровням с
          сертификацией по итогу.
        </p>
        <p>
          Взяла как стандарт индустрии формальную структуру по CEFR (A1–C2) —
          она сразу отвечает на вопрос «где я сейчас нахожусь», в отличие от
          абстрактных «юнитов». Сделала иначе: AI-тьютор живёт прямо внутри
          урока, а не в отдельной вкладке — помощь доступна в моменте, без
          переключения контекста. И пейволл — не один тариф на всё и не
          тарификация по срокам, а ступени по объёму контента: один уровень →
          все уровни языка → все языки.
        </p>
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={styles.mb12}>Структура</h3>
        <p className={cbStyles.gap12}>
          Спроектировала полный путь от установки до ежедневной привычки
          учиться: онбординг → выбор языка и уровня → урок с аудио и
          AI-тьютором → закрепление в квизе → видимый прогресс.
        </p>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/coffeebreak/structure-diagram.png"
          alt="Схема пользовательского флоу Coffee Break Languages"
        />
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={styles.mb12}>Решения</h3>
        <ul>
          <li>
            AI-тьютор встроен прямо в контент урока, а не вынесен в отдельный
            раздел приложения — пользователь получает объяснение, не теряя
            фокус и не выходя из потока обучения.
          </li>
          <li>
            Пейволл устроен как лестница, а не единственный выбор.
            Пользователь, который ещё не уверен, может купить только тот
            уровень, который сейчас проходит — это дешёвый первый шаг без
            ощущения, что покупаешь кота в мешке. Дальше он сам видит
            логичный апгрейд: все уровни этого языка, затем — все языки.
            Кнопка «Назад» с любого шага пейволла ведёт на общий
            (дефолтный) экран подписки, а не на предыдущий язык в скролле —
            чтобы пользователь не терялся в стеке выборов.
          </li>
          <li>
            Логика возврата в урок построена на состоянии прогресса: если
            урок не начат — пользователь попадает на Choose your level, если
            уже начат — сразу в Lesson. Это убирает лишний клик для тех, кто
            уже в процессе.
          </li>
        </ul>
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={cbStyles.gap32}>Пейволл: было → стало</h3>

        <p className={cbStyles.versionLabel}>Первая версия</p>
        <p className={cbStyles.gap12}>
          Один экран, один язык, два тарифа — Annual $34.99/year или Weekly
          $2.24/week. Общее предложение «Unlock full language learning» для
          всех, независимо от того, что человек только что выбрал.
        </p>
        <img
          loading="lazy"
          className={classNames(styles.radius12, cbStyles.gap20)}
          src="/image/project/coffeebreak/onboarding.png"
          alt="Первая версия пейволла: один экран для всех"
        />

        <p className={cbStyles.versionLabel}>Финальная версия</p>
        <p className={cbStyles.gap12}>
          Пейволл стал персонализированным и ступенчатым: заголовок и цена
          подстраиваются под язык и уровень, которые пользователь уже выбрал
          («Unlock German A1»), а дальше открывается выбор объёма — один
          уровень → все уровни языка → все языки, с ростом цены под каждую
          ступень.
        </p>
        <img
          loading="lazy"
          className={classNames(styles.radius12, cbStyles.gap20)}
          src="/image/project/coffeebreak/paywall-ladder.png"
          alt="Финальная версия пейволла: персонализированная лестница тарифов"
        />

        <p className={cbStyles.versionLabel}>Почему поменяли</p>
        <p>
          Плоское предложение не учитывало, что пользователь уже сделал выбор
          за два шага до пейволла — это была потерянная информация. Ступенчатая
          модель превращает её в персонализацию и одновременно снижает порог
          первой покупки: не нужно сразу решать за все языки сразу, можно
          попробовать один уровень.
        </p>
      </div>

      <h3 className={cbStyles.gap32}>Ключевые особенности</h3>

      <div className={cbStyles.featureBlock}>
        <h4 className={cbStyles.featureHeading}>Два типа проверки знаний</h4>
        <p>
          Matching (сопоставление слов с переводом) и Translate the word
          (перевод с вариантами ответа) — с понятными состояниями correct /
          error / retry.
        </p>
        <div className={cbStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/coffeebreak/quiz-matching.png"
            alt="Квиз: сопоставление слов с переводом (Matching)"
          />
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/coffeebreak/quiz-translate.png"
            alt="Квиз: перевод слова с вариантами ответа (Translate the word)"
          />
        </div>
      </div>

      <div className={cbStyles.featureBlock}>
        <h4 className={cbStyles.featureHeading}>
          Progress по каждому языку отдельно
        </h4>
        <p>
          Общий процент — сверху, но при изучении нескольких языков
          параллельно важнее детализация: уровень, пройденные уровни и уроки
          по каждому.
        </p>
        <div className={cbStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/coffeebreak/progress-per-language.png"
            alt="Экран прогресса по каждому изучаемому языку"
          />
        </div>
      </div>

      <div className={cbStyles.featureBlock}>
        <h4 className={cbStyles.featureHeading}>
          Продуманные пустые состояния
        </h4>
        <p>
          «Your learning journey starts here», «Your progress will appear
          here», «No saved lessons yet» — для всех разделов, где пользователь
          ещё не оставил данных.
        </p>
        <div className={cbStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/coffeebreak/empty-states.png"
            alt="Пустые состояния экранов Coffee Break Languages"
          />
        </div>
      </div>

      <div className={cbStyles.featureBlock}>
        <h4 className={cbStyles.featureHeading}>
          Флоу урока — кнопка открывается, только когда урок реально пройден
        </h4>
        <p>
          Урок совмещает аудио с изменяемой скоростью, текстовое объяснение и
          примеры — «Check your knowledge» становится доступной только после
          того, как пользователь дошёл до конца контента, а не сразу. Это не
          даёт проскочить урок не глядя ради галочки. После завершения
          появляется шторка с результатом — короткая пауза для подтверждения
          прогресса, прежде чем вернуться в список уроков.
        </p>
        <div className={cbStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/coffeebreak/lesson-flow.png"
            alt="Флоу урока: аудио, текст и проверка знаний"
          />
        </div>
      </div>

      <div className={classNames(cbStyles.gap32, cbStyles.gapTop32)}>
        <h3 className={styles.mb12}>App Store превью</h3>
        <p className={cbStyles.gap12}>
          Каждый из пяти экранов снимает одно конкретное возражение, которое
          мешает установить приложение, а не просто показывает интерфейс.
          Первый экран сознательно нарушает этот паттерн: его задача не
          убеждать, а зацепить внимание в поиске за ту долю секунды, что есть
          на решение. Под каждым баннером — реальный экран приложения, а не
          абстрактная иллюстрация: обещание сразу подтверждается тем, что
          человек увидит внутри.
        </p>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/coffeebreak/appstore-preview.png"
          alt="Пять превью-экранов Coffee Break Languages для App Store"
        />
      </div>

      <div className={cbStyles.gap32}>
        <h3 className={styles.mb12}>Результаты</h3>
        <p className={cbStyles.gap12}>
          4.3 из 5 — рейтинг в App Store (12 оценок). Глубокой продуктовой
          аналитики (retention, конверсия в подписку) по проекту пока нет —
          показываю то, что уже можно подтвердить: живую реакцию
          пользователей. Аналитика по проекту появится позже — раздел будет
          дополнен, когда накопится статистика по retention и конверсии в
          подписку.
        </p>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/coffeebreak/reviews.png"
          alt="Оценка и отзывы Coffee Break Languages в App Store"
        />
      </div>
    </>
  );
};
