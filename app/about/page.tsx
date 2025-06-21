import { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About | Raghu Nandan',
  description: 'Learn more about Raghu Nandan, a Generative AI Developer',
};

export default function About() {
  return <AboutContent />;
}