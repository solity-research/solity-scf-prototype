import { Box, Chip, Stack, Tooltip, Typography } from "@mui/material";
import { HorizonOperationType, HorizonPoolType } from "@solity/types/Horizon";
import SubtleHeading from "../SubtleHeading";
import DataTable from "../DataTable";
import { extractEndpointFromHref, shrinkAddress } from "@solity/helpers";
import { useState } from "react";
import { CardModal, Description } from "@solity/components";

type P = { pool: HorizonPoolType };

export default function Operations({ pool }: P) {
  const [selected, setSelected] = useState<HorizonOperationType>();
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
                <Box>{v ? shrinkAddress(v.toString()) : "N/A"}</Box>
              </Tooltip>
            ),
          },
          {
            key: "from",
            title: "From",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{v ? shrinkAddress(v.toString()) : "N/A"}</Box>
              </Tooltip>
            ),
          },
          {
            key: "to",
            title: "To",
            format: (v) => (
              <Tooltip title={v}>
                <Box>{v ? shrinkAddress(v.toString()) : "N/A"}</Box>
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
        onRowClick={setSelected}
        endpoint={extractEndpointFromHref(pool._links.operations)}
        outlined
      />
      <CardModal
        open={!!selected}
        title="Operation Detail"
        onClose={() => setSelected(undefined)}
      >
        {selected ? (
          <Stack spacing={1}>
            <Description
              title="Transaction Successful"
              description={selected.transaction_successful}
            />
            <Description title="Operation Type" description={selected.type} />
            <Description title="Timestamp" description={selected.created_at} />
            <Description
              title="Transaction Hash"
              description={selected.transaction_hash}
            />
            <Description title="From" description={selected.from} />
            <Description title="To" description={selected.to} />
            <Description title="Amount" description={selected.amount} />
            <Description
              title="Destination Min"
              description={selected.destination_min}
            />
            <Description title="Asset Type" description={selected.asset_type} />
            <Description title="Asset Code" description={selected.asset_code} />
            <Description
              title="Asset Issuer"
              description={selected.asset_issuer}
            />
            <SubtleHeading text="Paths" />
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ overflowX: "auto" }}
            >
              {selected.path ? (
                selected.path.map((p) => (
                  <Chip label={p.asset_code || p.asset_type} />
                ))
              ) : (
                <Typography>N/A</Typography>
              )}
            </Stack>
            <SubtleHeading text="Source" />
            <Description
              title="Account"
              description={selected.source_account}
            />
            <Description title="Amount" description={selected.source_amount} />
            <Description
              title="Asset Type"
              description={selected.source_asset_type}
            />
            <Description
              title="Asset Code"
              description={selected.source_asset_code}
            />
            <Description
              title="Asset Issuer"
              description={selected.source_asset_issuer}
            />
            <Description title="Max" description={selected.source_max} />
          </Stack>
        ) : (
          <></>
        )}
      </CardModal>
    </Stack>
  );
}
