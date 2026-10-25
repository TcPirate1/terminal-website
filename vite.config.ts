import { defineConfig } from 'vite'
import sitemapGeneration from './plugins/sitemapGenerator.ts'
import rssPlugin from './plugins/rss.ts'
import getDates from './plugins/bloghelper.ts'
import weatherBackend from './plugins/weather.ts'

export default defineConfig({
	base: '/terminal-website/',
	input: {
		main: "index.html",
		blog: "blog.html"
	},
	plugins: [sitemapGeneration(), rssPlugin(), getDates(), weatherBackend()]
})
