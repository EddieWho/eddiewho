import type { Locale } from '@/i18n';

export const siteConfig = {
  name: 'Yin Yuan',
  portrait: 'images/yin-yuan-portrait.png',
  email: 'eddyyin0424@gmail.com',
  github: 'https://github.com/EddieWho',
  linkedin: 'https://www.linkedin.com/in/yinyuan/',
  cv: 'files/Yin-Yuan-CV.docx',
} as const;

// Profile text that changes with the page language.
export const siteProfile: Record<Locale, {
  descriptor: string;
  role: string;
  description: string;
  intro: string;
  researchAreas: string[];
  // Shown as the profile card in the home page hero.
  profile: { label: string; value: string }[];
}> = {
  en: {
    descriptor: 'Student · Indie developer in the making',
    role: 'student / indie dev',
    description:
      'I explore how data and technology shape supply chains, organizations, and interactive experiences.',
    intro:
      'My interests span supply chain and logistics, and interactive media arts. I am drawn to both the operational logic of complex systems and the expressive possibilities of interactive media.',
    researchAreas: ['Supply Chain & Logistics', 'Interactive Media Arts'],
    profile: [
      { label: 'Class', value: 'Student' },
      { label: 'Major', value: 'Supply Chain & Logistics' },
      { label: 'Quest', value: 'Become an indie developer' },
      { label: 'Also into', value: 'Interactive Media Arts' },
    ],
  },
  zh: {
    descriptor: '学生 · 成长中的独立开发者',
    role: '学生 / 独立开发者',
    description: '我探索数据与技术如何塑造供应链、组织与交互体验。',
    intro:
      '我的兴趣横跨供应链与物流，以及交互媒体艺术。复杂系统的运作逻辑与交互媒体的表达可能，都同样吸引着我。',
    researchAreas: ['供应链与物流', '交互媒体艺术'],
    profile: [
      { label: '职业', value: '学生' },
      { label: '专业', value: '供应链与物流' },
      { label: '主线任务', value: '成为独立开发者' },
      { label: '也喜欢', value: '交互媒体艺术' },
    ],
  },
};

export const isTodoValue = (value: string) => value.startsWith('TODO_');
