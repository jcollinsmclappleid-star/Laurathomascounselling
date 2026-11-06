import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");

function loadRegistryPaths() {
  const routesFile = path.join(repoRoot, "src/lib/routes.ts");
  const source = fs.readFileSync(routesFile, "utf8");
  return [...source.matchAll(/path:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function findBuiltPagePaths(appDir, urlPrefix = "") {
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  let paths = [];

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(appDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.includes("[")) {
        continue;
      }
      const segment = entry.name === "app" ? "" : `${entry.name}/`;
      paths = paths.concat(findBuiltPagePaths(fullPath, `${urlPrefix}${segment}`));
      continue;
    }

    if (entry.name === "page.tsx") {
      paths.push(urlPrefix === "" ? "/" : `/${urlPrefix}`);
    }
  }

  return paths;
}

function normalizeBuiltPath(routePath) {
  if (routePath === "/") {
    return "/";
  }
  return routePath.endsWith("/") ? routePath : `${routePath}/`;
}

const registryPaths = loadRegistryPaths();
const duplicates = registryPaths.filter(
  (routePath, index) => registryPaths.indexOf(routePath) !== index,
);

if (duplicates.length > 0) {
  console.error("Duplicate registry paths:", [...new Set(duplicates)]);
  process.exit(1);
}

const appDir = path.join(repoRoot, "app");
const discovered = findBuiltPagePaths(appDir).map(normalizeBuiltPath);
const builtPaths = [...new Set(discovered)].sort();

const missingFromRegistry = builtPaths.filter(
  (builtPath) => !registryPaths.includes(builtPath),
);

if (missingFromRegistry.length > 0) {
  console.error("Built pages missing from registry:", missingFromRegistry);
  process.exit(1);
}

console.log(
  `check:routes OK — ${registryPaths.length} registry paths, ${builtPaths.length} built page(s).`,
);
