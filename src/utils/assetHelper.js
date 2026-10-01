/**
 * Helper to resolve static asset URLs properly across local dev,
 * custom domains, and GitHub Pages subfolder repositories.
 */
export function getAssetUrl(path) {
  if (!path) return ''
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path
  }

  // Strip any leading slash so it merges cleanly with base URL
  const cleanPath = path.replace(/^\/+/, '')
  const base = import.meta.env.BASE_URL || './'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`

  return `${normalizedBase}${cleanPath}`
}
