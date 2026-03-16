import fs from "fs";
import { scanSkill } from "./safetyScanner";

function scanFile(filePath: string) {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    const result = scanSkill(content);

    console.log("Skill Scan Result");
    console.log("------------------");
    console.log("Risk Level:", result.riskLevel);
    console.log("Detected Patterns:", result.detected.length > 0 ? result.detected.join(", ") : "None");

  } catch (error) {
    console.error("Error reading file:", error);
  }
}

const filePath = process.argv[2];

if (!filePath) {
  console.log("Usage: ts-node scanSkillFile.ts <skill-file>");
} else {
  scanFile(filePath);
}
