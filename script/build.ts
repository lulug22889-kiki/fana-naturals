import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, cp, access } from "fs/promises";
import { execSync } from "child_process";

const allowlist = [
  "@google/generative-ai",
  "@sanity/client",
  "@sanity/image-url",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "http-proxy-middleware",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building sanity studio...");
  try {
    execSync(
      "SANITY_STUDIO_PROJECT_ID=cmz2cc1a SANITY_STUDIO_DATASET=production npx sanity build dist/studio --yes",
      { stdio: "inherit" }
    );
  } catch (e) {
    console.warn("Sanity Studio build failed, skipping...");
  }

  try {
    await access("dist/studio/static");
    console.log("copying studio static assets to dist/public/static...");
    await cp("dist/studio/static", "dist/public/static", { recursive: true });
  } catch {
    console.warn("No studio static assets to copy");
  }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
