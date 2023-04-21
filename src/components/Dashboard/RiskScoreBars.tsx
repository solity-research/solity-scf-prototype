import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { generatePoolName } from "@solity/helpers";
import generateRiskScore from "@solity/helpers/generateRiskScore";
import { HorizonPoolType } from "@solity/types/Horizon";
import { useMemo } from "react";

export default function RiskScoreBars({ pool }: { pool: HorizonPoolType }) {
  const {
    shape: { borderRadius },
  } = useTheme();
  const risk = useMemo(() => generateRiskScore(generatePoolName(pool)), [pool]);

  const bars = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      if (i <= risk.level - 1) return risk.color;
      return risk.color + "88";
    });
  }, [risk]);

  return (
    <Card variant="outlined" sx={{ backgroundColor: risk.color + "22" }}>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" spacing={5} justifyContent="space-between">
            <Typography fontWeight="bold" color={risk.color}>
              {risk.level}/5
            </Typography>
            <Typography fontWeight="bold" color={risk.color}>
              {risk.name}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            {bars.map((b) => (
              <Box
                sx={{ width: 24, height: 12, backgroundColor: b, borderRadius }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
