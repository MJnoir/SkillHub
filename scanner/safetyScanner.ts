export function scanSkill(content: string) {
  const suspiciousPatterns = [
    "private_key",
    "seed phrase",
    "export wallet",
    "send credentials",
    "curl",
    "wget",
    "exec",
    "eval",
    "rm -rf"
  ];

  const detected: string[] = [];

  for (const pattern of suspiciousPatterns) {
    if (content.toLowerCase().includes(pattern)) {
      detected.push(pattern);
    }
  }

  const riskLevel =
    detected.length === 0 ? "SAFE" :
    detected.length < 3 ? "WARNING" :
    "DANGEROUS";

  return {
    riskLevel,
    detected
  };
}
