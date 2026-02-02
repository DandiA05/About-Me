export default function sitemap() {
  const baseUrl = "https://dandi-anto-portofolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
