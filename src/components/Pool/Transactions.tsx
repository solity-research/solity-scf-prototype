import { Box, Stack, Tooltip } from "@mui/material";
import { HorizonPoolType, HorizonTransactionType } from "@solity/types/Horizon";
import SubtleHeading from "../SubtleHeading";
import DataTable from "../DataTable";
import { extractEndpointFromHref, shrinkAddress } from "@solity/helpers";

type P = { pool: HorizonPoolType };

export default function Transactions({ pool }: P) {
  return (
    <Stack spacing={1}>
      <SubtleHeading text="Transactions" />
      <DataTable<HorizonTransactionType>
        cols={[
          {
            key: "hash",
            title: "Hash",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "source_account",
            title: "Source",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "created_at",
            title: "Date",
            format: (v) => {
              const d = new Date(v as string);
              return `${d.toLocaleDateString()} - ${d.toLocaleTimeString()}`;
            },
          },
          {
            key: "fee_charged",
            title: "Fee",
          },
          {
            key: "successful",
            title: "Successful",
            format: (v) => (v ? "✅" : "❌"),
          },
        ]}
        endpoint={extractEndpointFromHref(pool._links.transactions)}
        outlined
      />
    </Stack>
  );
}
