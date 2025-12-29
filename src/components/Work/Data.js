// Imports removed. Using static paths.

// Note: In Next.js with public folder, we can reference paths strings directly: "/assets/portf/..."
// If using import, need to handle static export.
// Let's use string paths for simplicity with Image component.

export const projectsData = [
  {
    id: 13,
    image: "/assets/portf/acc.png",
    title: "Astra Credit Companies",
    category: "web",
    link: "https://www.acc.co.id",
    tools: "NextJS",
    desc: "Corporate website for Astra Credit Companies. Contributed as Frontend Developer focusing on UI implementation, responsive layout, and performance optimization.",
  },
  {
    id: 14,
    image: "/assets/portf/moxamitramobile.png",
    title: "MOXA Mitra",
    category: "app",
    link: "https://play.google.com/store/apps/details?id=id.moxa.agent&hl=id",
    tools: "React Native",
    desc: "A production mobile application published on Google Play. Contributed to frontend features, UI improvements, and bug fixes as part of a professional team.",
  },
];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
];
