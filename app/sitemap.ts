import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1 },
    { path: "/login", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/register", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/bg678-game", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/apk-download", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/vip-club", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/bonus-offers", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/withdrawal-guide", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/how-to-play", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/faq", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/support", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms-conditions", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/responsible-gaming", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/disclaimer", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
