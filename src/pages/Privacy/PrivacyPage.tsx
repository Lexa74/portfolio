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
            Этот сайт — личное портфолио. В настоящий момент он не собирает
            и не хранит персональные данные посетителей, не использует
            файлы cookie и не подключает системы аналитики.
          </p>
          <p>
            В будущем на сайте может появиться аналитика (например,
            Яндекс.Метрика или Google Analytics) для сбора обезличенной
            статистики посещений — какие страницы просматривают, тип
            устройства и браузера, примерное местоположение по IP. Эти
            данные используются только для понимания того, как улучшить
            сайт, и не позволяют напрямую установить личность посетителя.
            При подключении аналитики этот раздел будет обновлён с
            указанием конкретного сервиса.
          </p>
          <p>
            Ссылки на Telegram, LinkedIn, email и опрос через Google Формы
            ведут на сторонние сервисы — их использование регулируется
            политиками конфиденциальности этих сервисов, а не этого сайта.
          </p>
          <p>Дата последнего обновления: сентябрь 2026.</p>
        </div>
      </div>
      <Footer page={'inner'} />
    </div>
  );
};
