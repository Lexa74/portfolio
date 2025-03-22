export interface IProject {
  id: number;
  src: string;
  name: string;
  description: string | null;
  component: React.ComponentType<{ isHover: boolean }> | null;
}
