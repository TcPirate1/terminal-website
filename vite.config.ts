import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const targetDir = path.resolve(import.meta.dirname, 'src/posts')

const readAllTextFiles = () => {
  if (!fs.existsSync(targetDir)) return {}
  
  const files = fs.readdirSync(targetDir)
  const result: Record<string, string> = {}

  for (const file of files) {
    const filePath = path.join(targetDir, file)
    if (fs.statSync(filePath).isFile() && file.endsWith('.txt')) {
      result[file] = fs.readFileSync(filePath, 'utf-8')
    }
  }
  return result
}

const fileContents = readAllTextFiles()

export default defineConfig({
	base: '/terminal-website/',
	define: {
		__TEXT_FILES__: JSON.stringify(fileContents),
	},
})
