import { IProject } from './sharedTypes/sharedTypes.ts';
import { MovieMate } from './pages/Main/components/ViewImageProject/MovieMate/MovieMate.tsx';
import { Dashboard } from './pages/Main/components/ViewImageProject/Dashboard/Dashboard.tsx';
import { Apteki } from './pages/Main/components/ViewImageProject/Apteki/Apteki.tsx';
import { CoffeeBreak } from './pages/Main/components/ViewImageProject/CoffeeBreak/CoffeeBreak.tsx';
import { AptekiPage } from './pages/ProjectPage/Apteki/AptekiPage.tsx';
import { DashboardPage } from './pages/ProjectPage/Dashboard/DashboardPage.tsx';
import { MovieMatePage } from './pages/ProjectPage/MovieMate/MovieMatePage.tsx';
import { CoffeeBreakPage } from './pages/ProjectPage/CoffeeBreak/CoffeeBreakPage.tsx';
import { FenukoFlowPage } from './pages/ProjectPage/FenukoFlow/FenukoFlowPage.tsx';
import { FenukoFlow } from './pages/Main/components/ViewImageProject/FenukoFlow/FenukoFlow.tsx';

export const data: IProject[] = [
  {
    id: 8,
    src: '/image/portfolio/FenukoFlow/cover.png',
    name: 'Fenuko Flow',
    tags: ['Mobile App', 'AI', 'Virtual Assistant'],
    component: FenukoFlow,
    pageId: 'fenuko-flow',
    pageComponent: FenukoFlowPage,
  },
  {
    id: 7,
    src: '/image/portfolio/CodeBuilder/cover.png',
    name: 'AI Code Builder',
    tags: ['Mobile App', 'AI', 'No-Code'],
    component: null,
    comingSoon: true,
  },
  {
    id: 5,
    src: '/image/portfolio/CoffeeBreak/cover.png',
    name: 'Coffee Break Languages',
    tags: ['Mobile App', 'EdTech', 'Language Learning'],
    component: CoffeeBreak,
    pageId: 'coffee-break',
    pageComponent: CoffeeBreakPage,
    ndaPassword: '1258',
  },
  {
    id: 1,
    src: '/image/portfolio/po1.png',
    name: 'Аптеки рядом',
    tags: ['Mobile Concept', 'UX Research', 'HealthTech'],
    component: Apteki,
    pageId: 'apteki',
    pageComponent: AptekiPage,
  },
  {
    id: 4,
    src: '/image/portfolio/po4.png',
    name: 'Дашборд CampaignCore',
    tags: ['Web App', 'SaaS', 'Analytics'],
    component: Dashboard,
    pageId: 'dashboard',
    pageComponent: DashboardPage,
  },
  {
    id: 3,
    src: '/image/portfolio/po1.png',
    name: 'Movie Mate',
    tags: ['Mobile App', 'UX Research', 'Personalization'],
    component: MovieMate,
    pageId: 'movie-mate',
    pageComponent: MovieMatePage,
  },
];
