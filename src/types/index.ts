export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'mobile' | 'web' | 'design';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'mobile' | 'backend' | 'design';
}