import { defineConfig } from 'vite'
import sitemapGeneration from './plugins/sitemapGenerator.ts'
import rssPlugin from './plugins/rss.ts'

export default defineConfig({
	base: '/terminal-website/',
	input: {
		main: "index.html",
		blog: "blog.html"
	},
	plugins: [sitemapGeneration(), rssPlugin()]
})
