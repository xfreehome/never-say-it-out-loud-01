import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I made that up, but I said it confidently enough that you believed me.";

// Gate: a single line, 1-200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim() || entry.includes("\n")) {
  throw new Error("Entry must be a single line of 1-200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
