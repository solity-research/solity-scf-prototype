import { Typography } from "@mui/material";
import { generatePoolName } from "@solity/helpers";
import generateRiskScore from "@solity/helpers/generateRiskScore";
import { HorizonPoolType } from "@solity/types/Horizon";

export default function RiskScoreText({ pool }: { pool: HorizonPoolType }) {
  const risk = generateRiskScore(generatePoolName(pool));
  return (
    <Typography fontWeight="bold" color={risk.color}>
      {risk.name}
    </Typography>
  );
}
