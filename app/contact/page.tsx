import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Raghu Nandan',
  description: 'Get in touch with Raghu Nandan, a Generative AI Developer',
};

export default function Contact() {
  return <ContactContent />;
}