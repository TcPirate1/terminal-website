import { resolve, join, extname } from "node:path";
import { readdirSync, writeFileSync } from "node:fs";
import type { Plugin, ResolvedConfig } from "vite";

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
            const outputDir = resolve(
                config.root,
                config.build.outDir
            );
            const outputPath = join(config.build.outDir, "sitemap.xml");
            try {
                const files = readdirSync(outputDir).filter((file: string) => extname(file) === fileExtension).map((file: string) => join(outputDir, file));
                const urls = files.map((file: string) => {
                    const route = file === "index.html" ? "" : `/${file.replace(/\.html$/, "")}`;
                    return `  <url>
    <loc>https://tcpirate1.github.io/terminal-website${route}</loc>
  </url>`;
                });
                
                const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

                writeFileSync(outputPath, sitemap, "utf-8");
            }
            catch (err) {
                console.error(err);
            }
        }
    };
};
