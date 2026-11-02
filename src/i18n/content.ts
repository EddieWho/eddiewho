import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from './index';

export type ProjectEntry = CollectionEntry<'projects'> | CollectionEntry<'projects-zh'>;

export interface LocalizedProject {
  /** English slug; shared by both languages so URLs line up. */
  slug: string;
  entry: ProjectEntry;
  /** False when the locale has no translation and English is shown instead. */
  translated: boolean;
}

export async function getHome(locale: Locale) {
  const localized = locale === 'zh' ? await getEntry('site', 'home-zh') : undefined;
  const entry = localized ?? (await getEntry('site', 'home'));
  if (!entry) {
    throw new Error('Missing home page content at src/content/site/home.json');
  }
  return entry.data;
}

export async function getProjects(locale: Locale): Promise<LocalizedProject[]> {
  const english = await getCollection('projects');
  const translations = locale === 'zh' ? await getCollection('projects-zh') : [];

  return english
    .map((project) => {
      const translation = translations.find((item) => item.slug === project.slug);
      return { slug: project.slug, entry: translation ?? project, translated: locale === 'en' || Boolean(translation) };
    })
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}

export async function getPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.publicationDate.valueOf() - a.data.publicationDate.valueOf());
}
