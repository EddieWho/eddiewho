export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; dateLocale: string; switchLabel: string; name: string }> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', dateLocale: 'en', switchLabel: 'EN', name: 'English' },
  zh: { htmlLang: 'zh-CN', ogLocale: 'zh_CN', dateLocale: 'zh-CN', switchLabel: '中', name: '中文' },
};

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Site-relative path for a locale, e.g. ('blog/', 'zh') -> '/eddiewho/zh/blog/'. */
export function localePath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '');
  return locale === defaultLocale ? `${base}${clean}` : `${base}${locale}/${clean}`;
}

/** Strips the base path and any locale prefix, e.g. '/eddiewho/zh/blog/' -> 'blog/'. */
export function stripLocale(pathname: string): string {
  let path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\/+/, '');
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (path === locale || path.startsWith(`${locale}/`)) {
      path = path.slice(locale.length).replace(/^\/+/, '');
    }
  }
  return path;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = pathname.startsWith(base) ? pathname.slice(base.length) : pathname.replace(/^\/+/, '');
  const first = path.split('/')[0];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

/** The same page in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(stripLocale(pathname), target);
}

export function formatDate(date: Date, locale: Locale, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString(localeMeta[locale].dateLocale, {
    month,
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export { ui, useTranslations } from './ui';
