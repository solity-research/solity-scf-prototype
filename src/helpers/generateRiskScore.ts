import theme from "@solity/theme";

const risks = [
  { level: 1, name: "Very Low", color: theme.palette.grey[500] },
  { level: 2, name: "Low", color: theme.palette.info.main },
  { level: 3, name: "Medium", color: theme.palette.primary.main },
  { level: 4, name: "High", color: theme.palette.warning.main },
  { level: 5, name: "Very High", color: theme.palette.error.main },
];

export default function generateRiskScore(pool: string) {
  let hash = 0;
  for (let i = 0; i < pool.length; i++) {
    hash = (hash << 5) - hash + pool.charCodeAt(i);
    hash = hash & hash;
  }
  const randomNumber = Math.abs(hash) % 5; // Generate a random number from 0-4
  return risks[randomNumber];
}
