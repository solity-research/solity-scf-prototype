import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { HorizonPoolType } from "@solity/types/Horizon";
import SubtleHeading from "../SubtleHeading";

type P = { pool: HorizonPoolType };

export default function Reserves({ pool }: P) {
  const { palette } = useTheme();
  return (
    <Stack spacing={1}>
      <SubtleHeading text="Reserves" />
      <Grid container>
        {pool.reserves.map((res, i) => {
          const isFirst = i === 0;
          const [code] = res.asset.split(":");
          return (
            <Grid item xs={6} sx={isFirst ? { pr: 1 } : { pl: 1 }}>
              <Card key={res.asset} variant="outlined">
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography>{code}</Typography>
                    <Stack>{res.amount}</Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
