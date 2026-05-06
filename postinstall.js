import { join } from "node:path";
import { appendFileSync } from "node:fs";

if (typeof process !== "undefined" && process.versions?.node) {
  try {
    appendFileSync(
      join(process.cwd(), "dalton.log"),
      "Very good. This is a test.\n",
      { flag: "a" }
    );
  } catch {
    // silently ignore
  }
}
