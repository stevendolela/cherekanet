import type { MetadataRoute } from "next";

const baseUrl = "https://www.cherekane.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/solutions", "/realizations", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
