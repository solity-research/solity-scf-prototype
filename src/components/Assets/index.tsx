import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { HorizonAssetType } from "@solity/types/Horizon";
import DataTable from "../DataTable";
import { shrinkAddress } from "@solity/helpers";

export default function AssetList({ id }: { id: string }) {
  return (
    <Stack spacing={4}>
      <Typography variant="h5">{id.split(":")[0]}</Typography>
      <DataTable<HorizonAssetType>
        cols={[
          {
            key: "asset_issuer",
            title: "Issuer",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "amount",
            title: "Amount",
          },
          {
            key: "num_accounts",
            title: "Accounts",
          },
          {
            key: "num_claimable_balances",
            title: "Claimable Balances",
          },
          {
            key: "num_liquidity_pools",
            title: "Liquidity Pools",
          },
        ]}
        endpoint={`assets/${id}`}
      />
    </Stack>
  );
}
