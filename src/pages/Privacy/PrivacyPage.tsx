import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import styles from '../ProjectPage/page.module.css';
import privacyStyles from './privacyPage.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import classNames from 'classnames';
import '../ProjectPage/page.css';

export const PrivacyPage = () => {
  return (
    <div className={privacyStyles.page}>
      <Header page={'inner'} />
      <div
        className={classNames(
          privacyStyles.content,
          globalS.wrapperInnerPage,
          globalS.paddingTop,
          'projectPage',
        )}
      >
        <h1>Политика конфиденциальности</h1>
        <div className={styles.divider}></div>
        <div className={privacyStyles.text}>
          <p>
            Этот сайт — личное портфолио. На нём нет форм, которые
            собирали бы личные данные посетителей (имя, email, телефон
            и т.п.).
          </p>
          <p>
            Для анализа того, как посетители используют сайт, подключена{' '}
            <a
              className={privacyStyles.link}
              target="_blank"
              href="https://clarity.microsoft.com/"
            >
              Microsoft Clarity
            </a>{' '}
            — сервис веб-аналитики. Он использует файлы cookie и собирает
            обезличенную статистику поведения на сайте: клики, скролл,
            движения курсора, записи сессий и тепловые карты
            взаимодействия с интерфейсом, тип устройства и браузера,
            примерное местоположение по IP. Эти данные используются
            только для того, чтобы понять, как улучшить сайт, и не
            позволяют напрямую установить личность посетителя. Подробнее
            о том, как Microsoft обрабатывает данные, —{' '}
            <a
              className={privacyStyles.link}
              target="_blank"
              href="https://clarity.microsoft.com/terms"
            >
              в политике конфиденциальности Clarity
            </a>
            .
          </p>
          <p>
            Ссылки на Telegram, LinkedIn, email и опрос через Google Формы
            ведут на сторонние сервисы — их использование регулируется
            политиками конфиденциальности этих сервисов, а не этого сайта.
          </p>
          <p>Дата последнего обновления: октябрь 2026.</p>
        </div>
      </div>
      <Footer page={'inner'} />
    </div>
  );
};
