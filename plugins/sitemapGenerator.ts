import path from "node:path";
import fs from "node:fs";
import { Plugin, ResolvedConfig } from "vite";

const fileExtension = ".html";

export default function sitemapGeneration(): Plugin {
    let config: ResolvedConfig;
    return {
        name: "sitemap-generator",
        apply: "build",
        configResolved(resolvedConfig) {
            config = resolvedConfig;
        },
        closeBundle() {
            const outputDir = config.base;
            const outputPath = "public/sitemap.xml";
            try {
                const files = fs.readdirSync(outputDir).filter(file => path.extname(file) === fileExtension).map(file => path.join(outputDir, file));
                const urls = files.map(file => {
                    const route = file === "index.html" ? "" : `/${file.replace(/\.html$/, "")}`;
                    return `  <url>
    <loc>${config.base}${route}</loc>
  </url>`;
                });
                
                const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

                fs.writeFileSync(outputPath, sitemap, "utf-8");
            }
            catch (err) {
                console.error(err);
            }
        }
    };
};
