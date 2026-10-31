import type { NextConfig } from "next";

const pages = ["about", "services", "ayush", "allopathy", "physiotherapy", "pharmacy", "laboratory", "community", "timings", "contact", "book"];

const nextConfig: NextConfig = {
  async redirects() {
    // Next preserves query strings, including existing department booking links.
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...pages.map((page) => ({ source: `/${page}.html`, destination: `/${page}`, permanent: true })),
    ];
  },
};

export default nextConfig;
