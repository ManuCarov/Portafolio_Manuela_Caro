export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}