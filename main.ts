import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Ridiculous at First Glance, Real by the Second — one-sentence pitch.
// Odd thing: retired grandmothers glaring at loitering teenagers.
// Who pays: the mall stores. Why it holds together: a grandmother's
// disappointed silence is the only deterrent that actually works.
const ENTRY =
  "We hire retired grandmothers to glare at loitering teenagers in malls, because stores pay for the only deterrent that actually works: a grandmother's disappointed silence.";

// Output dir: first argv, else OUTPUT_DIR env, else the competition default.
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
