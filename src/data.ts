import { IProject } from './sharedTypes/sharedTypes.ts';
import { MovieMate } from './pages/Main/components/ViewImageProject/MovieMate/MovieMate.tsx';
import { Dashboard } from './pages/Main/components/ViewImageProject/Dashboard/Dashboard.tsx';
import { Hackwish } from './pages/Main/components/ViewImageProject/Hackwish/Hackwish.tsx';
import { AptekiPage } from './pages/ProjectPage/Apteki/AptekiPage.tsx';
import { DashboardPage } from './pages/ProjectPage/Dashboard/DashboardPage.tsx';

export const data: IProject[] = [
  {
    id: 1,
    src: '/image/portfolio/po1.png',
    name: 'Аптеки рядом',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: null,
    pageId: 'apteki',
    pageComponent: AptekiPage,
  },
  {
    id: 2,
    src: '/image/portfolio/po2.png',
    name: 'HackWish',
    description: 'Мини-приложение для генерации поздравлений с помощью ИИ',
    component: Hackwish,
    pageId: 'hackwish',
    pageComponent: AptekiPage,
  },
  {
    id: 3,
    src: '/image/portfolio/po1.png',
    name: 'Movie Mate',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: MovieMate,
    pageId: 'movie-mate',
    pageComponent: AptekiPage,
  },
  {
    id: 4,
    src: '/image/portfolio/po4.png',
    name: 'Дашборд CampaignCore',
    description: 'Гибкий и функциональный интерфейс для аналитики',
    component: Dashboard,
    pageId: 'dashboard',
    pageComponent: DashboardPage,
  },
];
