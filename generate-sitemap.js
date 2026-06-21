const fs = require("fs");
const path = require("path");

const BASE_URL = "https://iamdurgesh.vercel.app";

const pages = ["/", "/#about", "/#skills", "/#projects", "/#experience", "/#contact"];

const isValidPath = (page) => typeof page === "string" && page.startsWith("/");

const buildSitemap = () => {
  const today = new Date().toISOString().split("T")[0];
  const filteredPages = pages.filter(isValidPath);

  if (filteredPages.length !== pages.length) {
    console.warn("⚠️ Some sitemap paths were ignored because they were invalid.");
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${filteredPages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;
};

const writeSitemap = () => {
  try {
    const publicDir = path.join(__dirname, "public");
    const sitemapPath = path.join(publicDir, "sitemap.xml");

    if (!fs.existsSync(publicDir)) {
      throw new Error("public directory not found");
    }

    fs.writeFileSync(sitemapPath, buildSitemap(), "utf8");
    console.log(`✅ Sitemap generated: ${sitemapPath}`);
  } catch (error) {
    console.error("❌ Failed to generate sitemap:", error.message);
    process.exitCode = 1;
  }
};

writeSitemap();
