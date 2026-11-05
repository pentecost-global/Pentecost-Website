import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/gatherings", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/partners", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/forum", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/get-involved", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/media", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: "2026-11-03",
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

