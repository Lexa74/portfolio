import { ICardPortfolio } from './sharedTypes/sharedTypes.ts';
import { MovieMate } from './pages/Main/components/ViewImages/MovieMate/MovieMate.tsx';

export const data: ICardPortfolio[] = [
  {
    id: 1,
    src: '/image/portfolio/Rectangle1.png',
    name: 'Аптеки рядом',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: null,
  },
  {
    id: 2,
    src: '/image/portfolio/Rectangle1-1.png',
    name: 'HackWish',
    description: 'Мини-приложение для генерации поздравлений с помощью ИИ',
    component: null,
  },
  {
    id: 3,
    src: '/image/portfolio/Rectangle1-2.png',
    name: 'Movie Mate',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: MovieMate(),
    idSelector: 'movie-mate',
  },
  {
    id: 4,
    src: '/image/portfolio/Rectangle1.png',
    name: 'Дашборд',
    description: null,
    component: null,
  },
  {
    id: 5,
    src: '/image/portfolio/Rectangle1.png',
    name: 'Дашборд',
    description: null,
    component: null,
  },
  {
    id: 6,
    src: '/image/portfolio/Rectangle1-2.png',
    name: 'Movie Mate',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: null,
  },
];
