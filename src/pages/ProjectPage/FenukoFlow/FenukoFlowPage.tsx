import styles from '../page.module.css';
import ffStyles from './fenukoFlowPage.module.css';
import classNames from 'classnames';

export const FenukoFlowPage = () => {
  return (
    <>
      <div className={ffStyles.titleRow}>
        <img
          className={ffStyles.appIcon}
          src="/image/project/fenukoflow/icon.png"
          alt=""
        />
        <h1 className={ffStyles.titleGrow}>
          Fenuko Flow — AI-ассистент, который собирает лучшие модели разных
          разработчиков в одном приложении
        </h1>
        <a
          className={ffStyles.appStoreBadge}
          target={'_blank'}
          href="https://apps.apple.com/us/app/fenuko-flow/id6805904639"
        >
          <img
            src="/image/project/fenukoflow/app-store-badge.svg"
            alt="Download on the App Store"
          />
        </a>
      </div>
      <div className={styles.divider}></div>
      <div className={ffStyles.metaRow}>
        <span>
          Роль: <b>Product &amp; UI/UX Designer</b>
        </span>
        <span>
          Формат: <b>Solo, end-to-end</b>
        </span>
        <span>
          Платформа: <b>iOS</b>
        </span>
        <span>Июль 2026</span>
      </div>

      <div className={ffStyles.gap32}>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/fenukoflow/hero.png"
          alt="Главный экран и чат Fenuko Flow"
        />
      </div>

      <div className={ffStyles.gap32}>
        <h3 className={styles.mb12}>Проблема</h3>
        <p>
          Сейчас AI-инструменты для текста, картинок и видео живут в разных
          сервисах. У каждого свой интерфейс, свои лимиты и своя подписка.
          Человек держит в голове, куда идти с какой задачей, и теряет
          результаты между приложениями. Нужен был один вход: пользователь
          пишет, говорит или прикрепляет файл, а приложение само
          подстраивается под задачу. Ограничения при этом должны быть
          понятными, а не обрывать работу без объяснений.
        </p>
      </div>

      <div className={ffStyles.gap32}>
        <h3 className={styles.mb12}>Ресерч</h3>
        <p>Сравнила подход трёх главных AI-ассистентов в App Store.</p>
        <p>
          <b>ChatGPT</b> — универсальный помощник: генерация изображений,
          голосовой режим в реальном времени, загрузка фото.
        </p>
        <p>
          <b>Google Gemini</b> пошёл в сторону экосистемы: проактивные
          агенты, подключение Gmail, Calendar и YouTube. Генерация видео там
          доступна только на платных планах Plus, Pro и Ultra.
        </p>
        <p className={ffStyles.gap12}>
          <b>Grok</b> делает ставку на свежие данные из X и на Grok Imagine —
          изображения и короткие видео со звуком.
        </p>
        <p>
          Как стандарт индустрии взяла набор, который пользователь уже ждёт
          от AI-ассистента: чат, голосовой ввод, вложения, генерацию
          изображений и видео в одном приложении.
        </p>
        <p className={ffStyles.gap12}>
          <b>Сделала иначе в трёх местах:</b>
        </p>
        <ul>
          <li>
            <b>Модели.</b> Каждый из трёх игроков работает только на своих
            моделях. Fenuko Flow собирает лучшие модели разных разработчиков
            в одном приложении: GPT для текста, Nano Banana для изображений,
            Kling и Veo для видео. Пользователю не нужно держать три
            подписки, чтобы получить сильную модель под каждую задачу.
          </li>
          <li>
            <b>Вход.</b> У крупных игроков возможностей всё больше, и точка
            входа становится сложнее. Здесь главный экран — это поле ввода и
            готовые сценарии («Создать изображение», «Итоги дня», «Написать
            письмо»). Пользователь может вообще не открывать список моделей.
          </li>
          <li>
            <b>Монетизация.</b> У конкурентов, если не хватает лимитов,
            нужно переходить на тариф дороже (у Gemini это Plus → Pro →
            Ultra). Здесь тариф один — Pro с месячным запасом токенов. Если
            токены кончились раньше времени, пользователь докупает пакет
            ровно на то, чего не хватило, и не переплачивает за новый тариф.
          </li>
        </ul>
      </div>

      <div className={ffStyles.gap32}>
        <h3 className={styles.mb12}>Структура</h3>
        <p className={ffStyles.gap12}>
          Спроектировала путь от первого запуска до регулярной работы с AI:
          онбординг → пейволл → Home → запрос (текст / голос / вложения /
          шаблон) → ответ в чате → результат в Library → возврат через
          историю чатов. Всё строится вокруг одного поля ввода, а режим
          задаёт выбор модели. Моделей много и они от разных разработчиков,
          поэтому в списке у каждой есть подпись: тип задачи и провайдер
          («Чат · openai», «Генерация изображений», «Генерация видео»). Так
          длинный список читается как три понятные группы, а не как набор
          названий. Чипсы на главном экране работают как короткий путь: они
          сами переключают модель на нужный тип и подставляют начало
          промпта.
        </p>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/fenukoflow/structure-diagram.png"
          alt="Схема пользовательского флоу Fenuko Flow"
        />
      </div>

      <div className={ffStyles.gap32}>
        <h3 className={styles.gap32}>Решения</h3>

        <h4 className={ffStyles.featureHeading}>
          Одна подписка и докупка вместо лестницы тарифов
        </h4>
        <p className={ffStyles.gap12}>
          Без подписки приложение почти ничего не даёт: бесплатный режим
          нужен, чтобы попробовать, а не чтобы постоянно им пользоваться. Pro
          даёт определённое количество токенов на месяц. Когда они
          заканчиваются, пользователь покупает пакет токенов, а не переходит
          на тариф дороже. Поэтому лимитов два, и у каждого своё сообщение с
          правильным выходом:
        </p>
        <ul className={ffStyles.gap12}>
          <li>
            «Daily limit reached» видит бесплатный пользователь. Оно ведёт к
            Upgrade.
          </li>
          <li>
            «Token limit reached» видит подписчик, у которого кончились
            месячные токены. Оно ведёт к покупке пакета.
          </li>
        </ul>
        <p className={ffStyles.gap12}>
          Человек, у которого уже есть Pro, никогда не увидит предложение
          купить Pro ещё раз. Бейдж в шапке тоже меняется вместе со статусом:
          у бесплатного пользователя это кнопка «Pro», у подписчика —
          оставшийся баланс токенов, чтобы лимит не стал сюрпризом.
        </p>
        <img
          loading="lazy"
          className={classNames(styles.radius12, ffStyles.gap32)}
          src="/image/project/fenukoflow/solutions-paywall.png"
          alt="Экраны Pro-подписки и докупки токенов"
        />

        <h4 className={ffStyles.featureHeading}>
          Генерация не держит пользователя в приложении
        </h4>
        <p className={ffStyles.gap12}>
          Видео генерируется долго, поэтому результат приходит сам. Если
          пользователь вне приложения, приходит iOS-пуш с превью готовой
          картинки или видео. Если в приложении — in-app баннер, по тапу на
          который он сразу переходит к результату.
        </p>
        <img
          loading="lazy"
          className={classNames(styles.radius12, ffStyles.gap32)}
          src="/image/project/fenukoflow/solutions-push.png"
          alt="Пуш-уведомление и in-app баннер о готовом результате"
        />

        <h4 className={ffStyles.featureHeading}>
          Разрешения запрашиваются в момент действия, а не на онбординге
        </h4>
        <p>
          Доступ к микрофону приложение просит при первом нажатии на запись
          голоса, к камере и галерее — при первом прикреплении фото. Тогда
          понятно, зачем нужен доступ, и отказов меньше.
        </p>
      </div>

      <h3 className={ffStyles.gap32}>Ключевые особенности</h3>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Настройки генерации, которые не мешают обычному чату
        </h4>
        <p>
          Иконка настроек появляется в поле ввода только для медиа-моделей.
          Для изображений это соотношение сторон (от 1:1 до 21:9 и Auto) и
          разрешение 1k / 2k / 4k. Для видео к ним добавляются звук и
          длительность 5 / 10 / 15 сек. В текстовом режиме интерфейс
          остаётся чистым.
        </p>
        <div className={ffStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/fenukoflow/feature-settings.png"
            alt="Настройки генерации изображений и видео"
          />
        </div>
      </div>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Голосовой ввод с понятными состояниями
        </h4>
        <p>
          Состояния идут по порядку: запись с волной и таймером, отмена или
          подтверждение, «Transcribing…», отправка. Пользователь всегда
          видит, что происходит с его голосом.
        </p>
        <div className={ffStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/fenukoflow/feature-voice.png"
            alt="Состояния голосового ввода"
          />
        </div>
      </div>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Единая медиатека и просмотр результата
        </h4>
        <p>
          Все сгенерированные изображения и видео собраны в Library. У
          каждого результата одинаковый набор действий: Save, Share,
          Regenerate, Show in Chat, Delete. «Show in Chat» возвращает к
          контексту, в котором результат появился.
        </p>
        <div className={ffStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/fenukoflow/feature-library.png"
            alt="Библиотека сгенерированных изображений и видео"
          />
        </div>
      </div>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Монетизация: подписка → токены → докупка
        </h4>
        <p>
          Подписка Pro (Annual / Weekly) с месячным запасом токенов. Пакеты
          от 100 до 1000 токенов со скидкой на крупный пакет для тех, кому
          месячного запаса не хватило. Special Offer −50% с таймером для
          тех, кто закрыл пейволл. В оплате есть альтернативные способы — СБП
          и банковская карта, а также опции «нужен чек» и отключение
          автопродления прямо в форме.
        </p>
      </div>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Удержание при отмене подписки
        </h4>
        <p>
          Перед отменой экран показывает дату, до которой сохранится доступ,
          и что будет после. Основная кнопка — «Stay On Pro», отмена —
          второстепенное действие.
        </p>
        <div className={ffStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/fenukoflow/feature-cancel.png"
            alt="Экраны отмены подписки"
          />
        </div>
      </div>

      <div className={ffStyles.featureBlock}>
        <h4 className={ffStyles.featureHeading}>
          Три причины, по которым ответ не пришёл
        </h4>
        <p>
          Ошибка генерации, кончившиеся токены и дневной лимит выглядят для
          пользователя одинаково — ответа нет. Поэтому у каждой причины своё
          сообщение и свой выход. Сбой показывается на месте ответа с
          кнопкой повтора: промпт сохраняется, и набирать его заново не
          нужно. Лимиты появляются плашкой над полем ввода, а не модальным
          окном. Переписка остаётся перед глазами, а плашка называет причину
          и сразу ведёт к решению: докупить токены или перейти на Pro.
        </p>
        <div className={ffStyles.featureImages}>
          <img
            loading="lazy"
            className={styles.radius12}
            src="/image/project/fenukoflow/feature-errors.png"
            alt="Состояния ошибки генерации и исчерпанных лимитов"
          />
        </div>
      </div>

      <div className={classNames(ffStyles.gap32, ffStyles.gapTop32)}>
        <h3 className={styles.mb12}>App Store превью</h3>
        <ul className={ffStyles.gap12}>
          <li>
            Каждый из пяти экранов отвечает на один вопрос, который человек
            задаёт себе перед установкой: «что оно умеет?», «справится ли с
            моей задачей?», «зачем мне это, если есть ChatGPT?»
          </li>
          <li>
            Первый экран сознательно нарушает этот паттерн. Его задача не
            объяснять, а зацепить внимание в поиске за ту долю секунды,
            когда принимается решение.
          </li>
          <li>
            Порядок остальных экранов повторяет путь пользователя внутри
            приложения, от первого запроса до накопленной истории. Человек
            видит не набор функций, а то, как будет выглядеть его опыт.
          </li>
          <li>
            Визуальный язык превью продолжается в онбординге. Обещание из
            стора не обрывается после установки, и приложение выглядит ровно
            так, как его показали.
          </li>
        </ul>
        <img
          loading="lazy"
          className={styles.radius12}
          src="/image/project/fenukoflow/appstore-preview.png"
          alt="Пять превью-экранов Fenuko Flow для App Store"
        />
      </div>

      <div className={ffStyles.gap32}>
        <h3 className={styles.mb12}>Результаты</h3>
        <p>
          Приложение недавно вышло в App Store, и оценок пока недостаточно
          для рейтинга. Раздел будет дополнен, когда накопятся отзывы и
          статистика по retention и конверсии в подписку и покупку токенов.
        </p>
      </div>
    </>
  );
};
