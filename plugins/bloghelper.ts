import { resolve, join } from "node:path";
import { stat, readdir, writeFile } from "node:fs/promises";
import type { Plugin } from "vite";

export default function getDates(): Plugin {
	return {
		name: "Blog Dates",
		async buildStart() {
			const postsDir = resolve('src/posts');
			const outputFile = resolve('src/blog-dates.json');
			const files = await readdir(postsDir, { withFileTypes: true });
			const entries: Record<string, string> = {};

			for (const file of files) {
					if (!file.isFile()) {
						continue
					}
					const filePath = join(postsDir, file.name);
					const metaData = await stat(filePath);
					entries[file.name] = metaData.birthtime.toISOString().split('T')[0];

					await writeFile(outputFile, JSON.stringify(entries, null, 2), "utf-8");
				}
			}
		}
	}
