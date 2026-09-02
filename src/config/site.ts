export const siteConfig = {
  name: 'Yin Yuan',
  descriptor: 'Research · Data · Interactive Systems',
  description:
    'I explore how data and technology shape supply chains, organizations, and interactive experiences.',
  intro:
    'My interests span supply chain and logistics, and interactive media arts. I am drawn to both the operational logic of complex systems and the expressive possibilities of interactive media.',
  researchAreas: ['Supply Chain & Logistics', 'Interactive Media Arts'],
  portrait: 'images/yin-yuan-portrait.png',
  email: 'eddyyin0424@gmail.com',
  github: 'https://github.com/EddieWho',
  linkedin: 'https://www.linkedin.com/in/yinyuan/',
  cv: 'files/Yin-Yuan-CV.docx',
} as const;

export const isTodoValue = (value: string) => value.startsWith('TODO_');
