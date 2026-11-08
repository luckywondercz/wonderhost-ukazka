import type { NextConfig } from "next";

import pkg from "./package.json";

const nextConfig: NextConfig = {
  // Samostatný výstup: .next/standalone obsahuje server se vším potřebným
  // a spouští se jako `node server.js` (tak aplikaci provozuje WonderHost).
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  // Verze a čas sestavení se vloží při buildu, aby bylo vidět,
  // která verze aplikace právě běží.
  env: {
    APP_VERSION: pkg.version,
    BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
