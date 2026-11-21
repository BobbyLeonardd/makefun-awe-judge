// Writes this entry's text to entry.txt. The bounty's gate: UTF-8, 1-280 code points.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `The hose is still running on the garden.
Water goes down through the beds
and does not come back.
Beneath the street it joins a river
that has gone the same way
since the valley was cut,
and the sea takes all of it
and is never full.`;

// Gate: UTF-8, 1-280 code points, not only whitespace. Fail loudly rather than submit a dud.
const ENTRY_FILE = "entry.txt";
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280 || ENTRY.trim() === "") {
  throw new Error(`entry text fails the gate: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), ENTRY, "utf8");
console.log(`wrote ${ENTRY_FILE} to ${outDir} (${codePoints} code points)`);