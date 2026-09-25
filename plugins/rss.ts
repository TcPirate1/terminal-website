import { resolve, basename } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import type { Plugin } from "vite";

const options = {
    siteUrl : "https://tcpirate1.github.io/terminal-website",
    title : "TC's blog",
    description : "A place for my thoughts",
    postsDir : "src/posts"
}

export default function rssPlugin(): Plugin {
    return {
        name: "generate-rss",
        apply: "build",
        async generateBundle() {
          const postsDir = resolve('src/posts')

          const files = await readdir(postsDir)

          const posts = await Promise.all(
            files
              .filter((file: string) => file.endsWith('.txt'))
              .map(async (file: string) => {
                const content = await readFile(
                  resolve(postsDir, file),
                  'utf8',
                )

                const slug = basename(file, '.txt')

                return {
                  slug,
                  title: slug,
                  content: content.trim(),
                }
              }),
          )

          const items = posts
            .map((post) => {
              const url = `${options.siteUrl}/blog`
              return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${escapeXml(url)}</link>
          <guid isPermaLink="false">${escapeXml(post.slug)}</guid>
          <description>${escapeXml(post.content)}</description>
        </item>`
            })
            .join('\n')

          const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(options.title)}</title>
        <link>${escapeXml(options.siteUrl)}</link>
        <description>${escapeXml(options.description ?? '')}</description>
    ${items}
      </channel>
    </rss>
    `
          this.emitFile({
            type: 'asset',
            fileName: 'rss.xml',
            source: xml,
          })
        },
      }
    }

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}