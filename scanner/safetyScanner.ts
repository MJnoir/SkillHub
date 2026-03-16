import { suspiciousPatterns } from "./rules";

export function scanSkill(content: string) {
  const detected: string[] = [];

  for (const pattern of suspiciousPatterns) {
    if (content.toLowerCase().includes(pattern)) {
      detected.push(pattern);
    }
  }

  let riskLevel: "SAFE" | "WARNING" | "DANGEROUS";

  if (detected.length === 0) {
    riskLevel = "SAFE";
  } else if (detected.length < 3) {
    riskLevel = "WARNING";
  } else {
    riskLevel = "DANGEROUS";
  }

  return {
    riskLevel,
    detected
  };
}
