const EXTERNAL_PATH = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

export function resolveAssetPath(path: string, base: string): string {
  if (EXTERNAL_PATH.test(path)) {
    return path;
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const baseWithoutTrailingSlash = normalizedBase.replace(/\/$/, '');
  const rootedPath = path.startsWith('/') ? path : `/${path}`;

  if (
    rootedPath === baseWithoutTrailingSlash ||
    rootedPath.startsWith(`${baseWithoutTrailingSlash}/`)
  ) {
    return rootedPath;
  }

  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
}
