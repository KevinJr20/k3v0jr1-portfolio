/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← makes GitHub Pages work
 
  trailingSlash: true,
  images: {
    unoptimized: true         // ← fixes Next/Image issues on static export
  }
};

export default nextConfig;