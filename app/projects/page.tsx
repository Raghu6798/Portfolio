import { Metadata } from 'next';
import ProjectsContent from '@/components/pages/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects | Raghu Nandan',
  description: 'Explore projects by Raghu Nandan, a Generative AI Developer',
};

export default function Projects() {
  return <ProjectsContent />;
}