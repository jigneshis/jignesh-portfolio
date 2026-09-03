import { FAQItem } from '@/types';

export const faqItems: FAQItem[] = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines depend on complexity. A landing page typically takes 2-3 weeks, while a full web application can take 4-8 weeks. I will provide a detailed timeline estimate after our initial discussion about your project scope.',
    defaultOpen: true,
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'I specialize in the modern JavaScript/TypeScript ecosystem: React, Next.js, and Node.js on the frontend and backend, with PostgreSQL, MongoDB, or Supabase for databases. I also work with Redis, AWS cloud services, and Tailwind CSS for styling.',
  },
  {
    question: 'Can you work with my existing codebase?',
    answer:
      'Absolutely. I am experienced in jumping into existing projects — whether it is adding new features, fixing bugs, refactoring for performance, or migrating to a modern stack. I will review your codebase first and provide an honest assessment.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes. I offer 30 days of post-launch support included with every project. After that, I am available for ongoing maintenance, feature additions, and performance monitoring on a retainer basis.',
  },
  {
    question: 'What is your development process like?',
    answer:
      'I follow a collaborative approach: discovery call → proposal → design review → development sprints → testing → launch. You will have visibility into progress throughout, and I will keep communication open via your preferred channel.',
  },
];
