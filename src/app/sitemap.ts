import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.safayarceramics.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mission`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/technology`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/interior`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
