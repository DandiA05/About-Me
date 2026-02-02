export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://dandi-anto-portofolio.vercel.app/sitemap.xml",
  };
}
