import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "'I Am Not a Robot' Checkbox, c. 2024. Humans proved they were human by teaching a machine what a bus looks like.";

const trimmed = entry.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`Gate check failed: entry must be 1-200 non-blank characters, got ${trimmed.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
