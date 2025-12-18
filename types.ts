export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link?: string; // External link
  route?: string; // Internal route
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
