// One-Line Office Joke: 24-Hour Sprint — program/v1 entry.
//
// Writes one line: a single-sentence joke about office life, the kind of
// line you send a colleague after a meeting that should have been an email.
// Deterministic: the same text on every run, no input, no randomness,
// no network, no clock.
//
// PASS 1 draft — the joke: a meeting that could have been an email
// reproduces. Setup names the universal office pain (the meeting that
// should have been an email), the punchline escalates it into follow-ups
// and a spreadsheet nobody will ever open — a specific, recognisable
// detail rather than a generic complaint.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// PASS 2 — sharpened: same setup, but the punchline is a surprise twist
// instead of a plain escalation. "Had three babies" reframes the meeting
// as reproducing, and the reveal (two follow-ups + the spreadsheet nobody
// will ever open) pays it off with a specific, recognisable office detail.
// Funnier on first read, still one sentence, still tight.
const ENTRY =
  "The meeting that could have been an email just had three babies: two follow-up meetings and a spreadsheet nobody will ever open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: 1-200 characters, not whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
