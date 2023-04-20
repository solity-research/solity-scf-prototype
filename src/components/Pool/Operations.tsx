import { Box, Stack, Tooltip } from "@mui/material";
import { HorizonOperationType, HorizonPoolType } from "@solity/types/Horizon";
import SubtleHeading from "../SubtleHeading";
import DataTable from "../DataTable";
import { extractEndpointFromHref, shrinkAddress } from "@solity/helpers";

type P = { pool: HorizonPoolType };

export default function Operations({ pool }: P) {
  return (
    <Stack spacing={1}>
      <SubtleHeading text="Operations" />
      <DataTable<HorizonOperationType>
        cols={[
          {
            key: "transaction_hash",
            title: "Hash",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "from",
            title: "From",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{shrinkAddress(v!.toString())}</Box>
              </Tooltip>
            ),
          },
          {
            key: "to",
            title: "To",
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
            key: "type",
            title: "Type",
          },
          {
            key: "transaction_successful",
            title: "Successful",
            format: (v) => (v ? "✅" : "❌"),
          },
        ]}
        endpoint={extractEndpointFromHref(pool._links.operations)}
        outlined
      />
    </Stack>
  );
}
