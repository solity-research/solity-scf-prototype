import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ProjectType } from "@solity/types/Project";
import Image from "next/image";

type P = { protocol: ProjectType };
export default function ProtocolDetail({ protocol }: P) {
  const { palette } = useTheme();
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack spacing={1}>
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Typography variant="h5">{protocol.name}</Typography>
          <Typography color={palette.text.secondary}>
            {protocol.symbol}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography color={palette.text.secondary}>
            {protocol.price.current}
          </Typography>
          <Typography color={palette.success.main}>
            +({protocol.price.change})
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ height: "100%" }}>
        <Image
          width={92}
          height={92}
          alt={`${protocol.name} logo`}
          src={protocol.logo}
        />
      </Box>
    </Stack>
  );
}
