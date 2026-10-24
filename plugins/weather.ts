// https://wttr.is/?format=j2 (use this endpoint if I ever want to customize the display. Another option is to use their % nomencleture)

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

interface WeatherCache {
  timestamp: number;
  data: string;
}

interface WeatherPluginOptions {
  cacheFile?: string;
  cacheDuration?: number;
  endpoint?: string;
}

const VIRTUAL_MODULE_ID = "virtual:weather";
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`;

const DEFAULT_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000;

export default function weatherPlugin(options: WeatherPluginOptions = {}): Plugin {
  let cacheFile = resolve("src/weather.json");

  const cacheDuration =
    options.cacheDuration ?? DEFAULT_CACHE_DURATION;

  const endpoint =
    options.endpoint ?? "https://wttr.in/?format=2";

  async function getWeather(): Promise<string> {
    try {
      const contents = await readFile(cacheFile, "utf8");
      const cache = JSON.parse(contents) as WeatherCache;

      if (typeof cache.data === "string" && Date.now() - cache.timestamp < cacheDuration) {
        return cache.data;
      }
    } catch (error) {
      if (!(error instanceof Error) || !("code" in error && error.code === "ENOENT")) {
        console.warn("[weather-plugin] Cache read failed:", error);
      }
    }

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`wttr.in returned HTTP ${response.status}`);
    }

    const data = (await response.text()).trim();

    if (!data) {
      throw new Error("wttr.in returned an empty response");
    }

    await mkdir(dirname(cacheFile), { recursive: true });

    const cache: WeatherCache = {
      timestamp: Date.now(),
      data
    };

    await writeFile(cacheFile, JSON.stringify(cache, null, 2), "utf8");

    return data;
  }

  return {
    name: "wttr weather",

    configResolved(config) {
      cacheFile = resolve(config.root, options.cacheFile ?? "src/weather.json");
    },

    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID;
      }
    },

    async load(id) {
      if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
        return null;
      }

      const data = await getWeather();

      return `export default ${JSON.stringify(data)};`;
    },
  };
}
