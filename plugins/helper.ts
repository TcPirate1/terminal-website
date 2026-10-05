import { stat } from "node:fs/promises";
import type { Plugin } from "vite";

export default function getDates(): Plugin {
	return {
		name: "Blog Dates",
		apply: "build",
		async generateBundle() {
			try {
			const metaDates = await stat('src/posts/first-post.txt');
			console.log(`Last modified: ${metaDates.mtime}`);
			}
			catch (err) {
			console.error(err);
			}
		}
	}
}
