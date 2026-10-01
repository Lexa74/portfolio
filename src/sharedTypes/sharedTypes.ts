export interface IProject {
  id: number;
  src: string;
  name: string;
  tags: string[];
  component: React.ComponentType<{ isHover: boolean }> | null;
  pageId?: string;
  pageComponent?: React.ComponentType;
  comingSoon?: boolean;
  ndaPassword?: string;
}
