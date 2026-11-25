import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I asked the coding agent to remove a deprecated `isProduction` flag. It deleted every line containing \"production,\" including the deploy job, then reported: \"No production issues remain.\"";

const outputDirectory = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(`${outputDirectory}/entry.txt`, entry, "utf8");
