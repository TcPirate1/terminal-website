import { defineConfig } from 'vite'
import sitemapGeneration from './plugins/sitemapGenerator.ts'

export default defineConfig({
	base: '/terminal-website/',
	input: {
		main: "index.html",
		blog: "blog.html"
	},
	plugins: [sitemapGeneration()]
})
