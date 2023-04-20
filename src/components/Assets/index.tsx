import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { HorizonAssetType } from "@solity/types/Horizon";
import DataTable from "../DataTable";
import { shrinkAddress } from "@solity/helpers";

export default function AssetList({ id }: { id: string }) {
  const [code, issuer] = id.split(":");
  return (
    <Stack spacing={4}>
      <Typography variant="h5">{code}</Typography>
      <DataTable<any>
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
        endpoint={`assets?assetCode=${code}&assetIssuer=${issuer}`}
      />
    </Stack>
  );
}
