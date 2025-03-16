import { JSX } from 'react';

export interface ICardPortfolio {
  id: number;
  src: string;
  name: string;
  description: string | null;
  component: JSX.Element | null;
  idSelector?: string;
}
