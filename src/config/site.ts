export const siteConfig = {
  name: 'Yin Yuan',
  descriptor: 'Research · Data · Interactive Systems',
  description:
    'I explore how technology shapes organizations, markets, and interactive experiences.',
  intro:
    'My work sits between analytical inquiry and interactive design. I am interested in how systems shape decisions—and how thoughtful technology can make complex ideas tangible.',
  email: 'TODO_EMAIL',
  github: 'https://github.com/EddieWho',
  linkedin: 'TODO_LINKEDIN_URL',
  cv: 'TODO_CV_URL',
} as const;

export const isTodoValue = (value: string) => value.startsWith('TODO_');
