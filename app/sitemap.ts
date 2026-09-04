import type { MetadataRoute } from "next";
import { PROFILE } from "@/constants/Profile";

/** Generated from PROFILE.siteUrl so the domain can't drift out of sync. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PROFILE.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
