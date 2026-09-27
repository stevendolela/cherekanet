import type { MetadataRoute } from "next";

const baseUrl = "https://www.cherekane.net";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/solutions",
    "/solutions/tech",
    "/solutions/digital",
    "/solutions/communication",
    "/solutions/evenementiel",
    "/solutions/conseil-services",
    "/realizations",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/solutions" ? 0.9 : 0.7,
  }));
}
