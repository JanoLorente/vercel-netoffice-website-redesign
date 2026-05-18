const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isPages = process.env.GITHUB_ACTIONS === 'true' && repo !== ''
const basePath = isPages ? `/${repo}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
