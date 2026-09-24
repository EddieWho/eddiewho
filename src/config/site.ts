export const siteConfig = {
  name: 'Yin Yuan',
  descriptor: 'Student · Indie developer in the making',
  role: 'student / indie dev',
  description:
    'I explore how data and technology shape supply chains, organizations, and interactive experiences.',
  intro:
    'My interests span supply chain and logistics, and interactive media arts. I am drawn to both the operational logic of complex systems and the expressive possibilities of interactive media.',
  researchAreas: ['Supply Chain & Logistics', 'Interactive Media Arts'],
  // Shown as the profile card in the home page hero.
  profile: [
    { label: 'Class', value: 'Student' },
    { label: 'Major', value: 'Supply Chain & Logistics' },
    { label: 'Quest', value: 'Become an indie developer' },
    { label: 'Also into', value: 'Interactive Media Arts' },
  ],
  portrait: 'images/yin-yuan-portrait.png',
  email: 'eddyyin0424@gmail.com',
  github: 'https://github.com/EddieWho',
  linkedin: 'https://www.linkedin.com/in/yinyuan/',
  cv: 'files/Yin-Yuan-CV.docx',
} as const;

export const isTodoValue = (value: string) => value.startsWith('TODO_');
