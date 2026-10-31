import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      // Keep the original image rendering and shared Google Fonts stylesheet.
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
      "react/no-unescaped-entities": "off"
    }
  },
  globalIgnores([".next/**", ".vercel/**", ".freebuff/**", ".qodo/**", "playwright-report/**", "test-results/**", "next-env.d.ts"])
]);
