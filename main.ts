import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Writes Neon's revised entry line to the grader's output dir (Wave 1 revision).

const line = "For $19 a month, we try to scam your parents by phone, coaching them and texting you if they bite, because you'd rather Dad fail a mock IRS call than wire $40,000 to a \"jailed grandson.\"";

const candidates = [
  process.env.MAKEFUN_OUTPUT_DIR,
  "/output",
  join(process.cwd(), "output"),
].filter((d): d is string => Boolean(d));

let written = false;
let lastError: unknown = null;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), line, "utf8");
    written = true;
    break;
  } catch (err) {
    lastError = err;
  }
}
if (!written) {
  throw lastError ?? new Error("could not write entry.txt");
}
