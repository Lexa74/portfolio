import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import collagesStyles from './collagesPage.module.css';
import globalS from '/src/UI/sharedStyles.module.css';
import classNames from 'classnames';
import '../ProjectPage/page.css';

const images = [
  {
    src: '/image/project/collages/collage-01.png',
    alt: 'Коллаж «don\'t give up» — вырезки из газет на фоне промышленного пейзажа',
  },
  {
    src: '/image/project/collages/collage-02.png',
    alt: 'Коллаж с силуэтами в дверях поезда на акварельном фоне',
  },
  {
    src: '/image/project/collages/collage-03.png',
    alt: 'Коллаж «Искусство — это язык, понятный всем людям» с обложкой Vogue и люстрой',
  },
  {
    src: '/image/project/collages/collage-04.png',
    alt: 'Коллаж с лестницей особняка, вклеенным лесным пейзажем и сухим листом',
  },
  {
    src: '/image/project/collages/collage-05.png',
    alt: 'Коллаж с японскими чайными плантациями и упаковкой чая',
  },
  {
    src: '/image/project/collages/collage-06.png',
    alt: 'Коллаж с рисунками, вырезкой PIZZA и свечой',
  },
  {
    src: '/image/project/collages/collage-07.png',
    alt: 'Коллаж «Зима» с цианотипией куполов и строками Пушкина',
  },
  {
    src: '/image/project/collages/collage-08.png',
    alt: 'Коллаж «Любовь — это разрешить человеку быть таким, каким он готов быть»',
  },
  {
    src: '/image/project/collages/collage-09.png',
    alt: 'Коллаж с шоколадом Tony\'s Chocolonely и подписью «crazy about chocolate»',
  },
  {
    src: '/image/project/collages/collage-10.png',
    alt: 'Коллаж «Сон в летнюю ночь» с женщиной в красном плаще',
  },
  {
    src: '/image/project/collages/collage-11.png',
    alt: 'Коллаж «Вы правда поверили, что мне подходит взрослая работа?»',
  },
  {
    src: '/image/project/collages/collage-12.png',
    alt: 'Коллаж «Чего хотят женщины? Деньги, слава, кока-кола»',
  },
];

export const CollagesPage = () => {
  return (
    <div className={collagesStyles.page}>
      <Header page={'inner'} />
      <div
        className={classNames(
          collagesStyles.content,
          globalS.wrapperInnerPage,
          globalS.paddingTop,
          'projectPage',
        )}
      >
        <div className={collagesStyles.stack}>
          <h1>Коллажи</h1>
          <p>
            Очень люблю делать что-то своими руками. Последние пару лет это
            коллажи: ищу в журналах буквы и картинки, складываю их вместе,
            что-то дорисовываю и смотрю, что выйдет. Иногда выходит смешно.
            Тут то, что получилось.
          </p>
        </div>

        <div className={collagesStyles.grid}>
          {images.map((img) => (
            <img key={img.src} loading="lazy" src={img.src} alt={img.alt} />
          ))}
          <img
            className={collagesStyles.banner}
            loading="lazy"
            src="/image/project/collages/collage-banner.png"
            alt="Коллаж-баннер с надписями BECHA и Spring, чёрно-белые фотографии"
          />
        </div>
      </div>
      <Footer page={'inner'} />
    </div>
  );
};
