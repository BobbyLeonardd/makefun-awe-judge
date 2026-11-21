// Writes this entry's text to entry.txt. The bounty's gate: UTF-8, 1-280 code points.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `The clock in the hall stopped on Tuesday
and nobody has wound it.
The dust on its face is mostly
what the room has been breathing.
Outside, the scree gives up a stone
every few winters or so,
and the hill is a little lower
than when the clock was made.`;

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