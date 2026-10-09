import { resolve, join } from "node:path";
import { stat, readdir } from "node:fs/promises";
import type { Plugin } from "vite";

export default function getDates(): Plugin {
	const virtualId = 'virtual:blogdates';
	const resolvedId = '\0' + virtualId;
	return {
		name: "Blog Dates",
		resolveId(id) {
			if (id === virtualId) {
				return resolvedId;
			}
		},
		async load(id) {
			if (id === resolvedId) {
				const postsDir = resolve('src/posts');
				const files = await readdir(postsDir, { withFileTypes: true });
				const entries: Record<string, string> = {};
				for (const file of files) {
					if (!file.isFile()) {
						continue
					}
					const filePath = join(postsDir, file.name);
					const metaData = await stat(filePath);
					entries[file.name] = metaData.birthtime.toISOString().split('T')[0];
				}
				return `export const creationDate = ${JSON.stringify(entries)}`
			}
		}
	}
}
