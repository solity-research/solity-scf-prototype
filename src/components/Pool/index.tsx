import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { generatePoolName } from "@solity/helpers";
import useApi from "@solity/hooks/useApi";
import { HorizonPoolType } from "@solity/types/Horizon";
import Transactions from "./Transactions";
import Reserves from "./Reserves";
import Operations from "./Operations";

type P = { id: string };

export default function PoolDetail({ id }: P) {
  const { palette } = useTheme();
  const { data, loading, error } = useApi<HorizonPoolType>(
    `liquidity_pools/${id}`
  );

  return data ? (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Typography variant="h5">{generatePoolName(data)} Pool</Typography>
        </Stack>
        <Typography color={palette.text.secondary}>
          Shares: {data.total_shares}
        </Typography>
        <Typography color={palette.text.secondary}>
          Fee: {data.fee_bp / 100}%
        </Typography>
      </Stack>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Reserves pool={data} />
            <Operations pool={data} />
            <Transactions pool={data} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  ) : (
    <Stack alignItems="center">
      {loading ? <CircularProgress /> : "No such pool"}
    </Stack>
  );
}
