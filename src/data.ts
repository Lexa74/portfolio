import { IProject } from './sharedTypes/sharedTypes.ts';
import { MovieMate } from './pages/Main/components/ViewImageProject/MovieMate/MovieMate.tsx';
import { Dashboard } from './pages/Main/components/ViewImageProject/Dashboard/Dashboard.tsx';
import { Apteki } from './pages/Main/components/ViewImageProject/Apteki/Apteki.tsx';
import { AptekiPage } from './pages/ProjectPage/Apteki/AptekiPage.tsx';
import { DashboardPage } from './pages/ProjectPage/Dashboard/DashboardPage.tsx';
import { MovieMatePage } from './pages/ProjectPage/MovieMate/MovieMatePage.tsx';
import { CoffeeBreakPage } from './pages/ProjectPage/CoffeeBreak/CoffeeBreakPage.tsx';

export const data: IProject[] = [
  {
    id: 5,
    src: '/image/portfolio/CoffeeBreak/cover.png',
    name: 'Coffee Break Languages',
    description:
      'Мобильное приложение для изучения языков со структурой по уровням CEFR (A1–C2)',
    component: null,
    pageId: 'coffee-break',
    pageComponent: CoffeeBreakPage,
  },
  {
    id: 1,
    src: '/image/portfolio/po1.png',
    name: 'Аптеки рядом',
    description:
      'Концепт приложения, разработанный на основе исследований пользователей',
    component: Apteki,
    pageId: 'apteki',
    pageComponent: AptekiPage,
  },
  {
    id: 3,
    src: '/image/portfolio/po1.png',
    name: 'Movie Mate',
    description:
      'Приложение для поиска фильмов на основе предпочтений пользователя',
    component: MovieMate,
    pageId: 'movie-mate',
    pageComponent: MovieMatePage,
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
