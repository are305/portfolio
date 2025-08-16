/** @type {import('next').NextConfig} */

// Read repo name for GitHub Pages
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : "";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    // Important for GitHub Pages - no /_next/image
    unoptimized: true,
  },
};

module.exports = nextConfig;
