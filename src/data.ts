import { lazy } from 'react';
import { IProject } from './sharedTypes/sharedTypes.ts';
import { MovieMate } from './pages/Main/components/ViewImageProject/MovieMate/MovieMate.tsx';
import { Dashboard } from './pages/Main/components/ViewImageProject/Dashboard/Dashboard.tsx';
import { Apteki } from './pages/Main/components/ViewImageProject/Apteki/Apteki.tsx';
import { CoffeeBreak } from './pages/Main/components/ViewImageProject/CoffeeBreak/CoffeeBreak.tsx';
import { FenukoFlow } from './pages/Main/components/ViewImageProject/FenukoFlow/FenukoFlow.tsx';

// Страницы кейсов — тяжёлые (много разметки/текста), подгружаются только
// при переходе на конкретный кейс, а не вместе с главной.
const AptekiPage = lazy(() =>
  import('./pages/ProjectPage/Apteki/AptekiPage.tsx').then((m) => ({
    default: m.AptekiPage,
  })),
);
const DashboardPage = lazy(() =>
  import('./pages/ProjectPage/Dashboard/DashboardPage.tsx').then((m) => ({
    default: m.DashboardPage,
  })),
);
const MovieMatePage = lazy(() =>
  import('./pages/ProjectPage/MovieMate/MovieMatePage.tsx').then((m) => ({
    default: m.MovieMatePage,
  })),
);
const CoffeeBreakPage = lazy(() =>
  import('./pages/ProjectPage/CoffeeBreak/CoffeeBreakPage.tsx').then((m) => ({
    default: m.CoffeeBreakPage,
  })),
);
const FenukoFlowPage = lazy(() =>
  import('./pages/ProjectPage/FenukoFlow/FenukoFlowPage.tsx').then((m) => ({
    default: m.FenukoFlowPage,
  })),
);

export const data: IProject[] = [
  {
    id: 8,
    src: '/image/portfolio/FenukoFlow/cover.webp',
    name: 'Fenuko Flow',
    tags: ['Mobile App', 'AI', 'Virtual Assistant', '2026'],
    component: FenukoFlow,
    pageId: 'fenuko-flow',
    pageComponent: FenukoFlowPage,
  },
  {
    id: 7,
    src: '/image/portfolio/CodeBuilder/cover.webp',
    name: 'AI Code Builder',
    tags: ['Mobile App', 'AI', 'No-Code', '2026'],
    component: null,
    comingSoon: true,
  },
  {
    id: 5,
    src: '/image/portfolio/CoffeeBreak/cover.webp',
    name: 'Coffee Break Languages',
    tags: ['Mobile App', 'EdTech', 'Language Learning', '2026'],
    component: CoffeeBreak,
    pageId: 'coffee-break',
    pageComponent: CoffeeBreakPage,
    ndaPassword: '1258',
  },
  {
    id: 1,
    src: '/image/portfolio/po1.webp',
    name: 'Аптеки рядом',
    tags: ['Mobile Concept', 'UX Research', 'HealthTech', '2025'],
    component: Apteki,
    pageId: 'apteki',
    pageComponent: AptekiPage,
  },
  {
    id: 4,
    src: '/image/portfolio/po4.webp',
    name: 'Дашборд CampaignCore',
    tags: ['Web App', 'SaaS', 'Analytics', '2024'],
    component: Dashboard,
    pageId: 'dashboard',
    pageComponent: DashboardPage,
  },
  {
    id: 3,
    src: '/image/portfolio/po1.webp',
    name: 'Movie Mate',
    tags: ['Mobile App', 'UX Research', 'Personalization', '2024'],
    component: MovieMate,
    pageId: 'movie-mate',
    pageComponent: MovieMatePage,
  },
];
